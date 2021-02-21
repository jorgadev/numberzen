import React, { useState, useEffect, useContext } from "react";
import {
  HStack,
  Button,
  Input,
  useNumberInput,
  useToast,
} from "@chakra-ui/react";

import Divisors from "./Divisors";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Dividend() {
  const [value, setValue] = useState(1);
  const [divisors, setDivisors] = useState([1]);
  const toast = useToast();
  const theme = useContext(ThemeContext);

  // On every value change find divisors
  useEffect(() => {
    findDivisors(value);
  }, [value]);

  // Find divisors of number and set the divisors state
  const findDivisors = (number) => {
    const divisorsForNumber = [];
    for (let i = 1; i <= number; i++) {
      if (number % i == 0) {
        divisorsForNumber.push(i);
      }
    }
    setDivisors(divisorsForNumber);
  };

  // Validate input
  const inputNumber = (e) => {
    const re = /^[0-9]+$/g;
    if (e.target.value.match(re)) {
      setValue(parseInt(e.target.value));
    } else {
      showToast("Input must be a number.");
    }
  };

  // Change value with buttons if valid
  const changeValue = (changer) => {
    if (value > 9998 && changer == 1) {
      setValue(9999);
      showToast("Maximum number is 9999.");
    } else {
      setValue((prev) => prev + changer);
    }
  };

  // Show error toast if input is invalid
  const showToast = (message) => {
    const id = "unique";
    if (!toast.isActive(id)) {
      return toast({
        id: id,
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  // Chakra UI input props
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    value: value,
    min: 1,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <>
      <HStack maxW="320px" className="Number">
        <Button {...dec} onClick={() => changeValue(-1)}>
          -
        </Button>
        <Input
          {...input}
          className="prime-number-input"
          color={theme.color}
          onChange={(e) => {
            if (e.target.value == "") {
              setValue(1);
            } else if (e.target.value.length > 4) {
              setValue(9999);
              showToast("Maximum number is 9999.");
            } else {
              inputNumber(e);
            }
          }}
        />
        <Button {...inc} onClick={() => changeValue(1)}>
          +
        </Button>
      </HStack>
      <Divisors divisors={divisors} />
    </>
  );
}

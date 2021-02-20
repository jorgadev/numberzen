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

  useEffect(() => {
    findDivisors(value);
  }, [value]);

  const findDivisors = (number) => {
    const divisorsForNumber = [];
    for (let i = 1; i <= number; i++) {
      if (number % i == 0) {
        divisorsForNumber.push(i);
      }
    }
    setDivisors(divisorsForNumber);
  };

  const inputNumber = (e) => {
    const re = /^[0-9]+$/g;
    if (e.target.value.match(re)) {
      setValue(parseInt(e.target.value));
    } else {
      showToast("Input must be a number.");
    }
  };

  const changeValue = (changer) => {
    if (value > 9998 && changer == 1) {
      setValue(9999);
      showToast("Maximum number is 9999.");
    } else {
      setValue((prev) => prev + changer);
    }
  };

  const showToast = (message) => {
    return toast({
      title: "Warning",
      description: message,
      status: "warning",
      isClosable: true,
      position: "bottom-left",
    });
  };

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

import React, { useState, useEffect, useContext } from "react";
import {
  HStack,
  Button,
  Input,
  useNumberInput,
  useToast,
} from "@chakra-ui/react";

import { ThemeContext } from "../contexts/ThemeContext";

export default function Number({ setIsPrime, setNumber }) {
  const [value, setValue] = useState(0);
  const toast = useToast();
  const theme = useContext(ThemeContext);

  // On value change set number to that value and check if prime
  useEffect(() => {
    setNumber(value);
    if (checkIfPrime(value)) {
      setIsPrime(true);
    } else {
      setIsPrime(false);
    }
  }, [value]);

  // Check if number is prime number
  const checkIfPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  // Valiadte input and set the state
  const inputNumber = (e) => {
    const re = /^[0-9]+$/g;
    if (e.target.value.match(re)) {
      setValue(parseInt(e.target.value));
    } else {
      showToast("Input must be a number.");
    }
  };

  // Change and validate value on button click
  const changeValue = (changer) => {
    if (value > 9998 && changer == 1) {
      setValue(9999);
      showToast("Maximum number is 9999.");
    } else {
      setValue((prev) => prev + changer);
    }
  };

  // Show error messages if input is invalid
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
    min: 0,
  });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
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
            setValue(0);
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
  );
}

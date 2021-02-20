import React, { useState, useEffect } from "react";
import {
  HStack,
  Button,
  Input,
  useNumberInput,
  useToast,
} from "@chakra-ui/react";

export default function Number({ setIsPrime, setNumber }) {
  const [value, setValue] = useState(0);
  const toast = useToast();

  useEffect(() => {
    setNumber(value);
    if (checkIfPrime(value)) {
      setIsPrime(true);
    } else {
      setIsPrime(false);
    }
  }, [value]);

  const checkIfPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
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

import React from "react";
import { HStack, Button, Input, useNumberInput } from "@chakra-ui/react";

export default function Number() {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 0,
    min: 0,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  return (
    <HStack maxW="320px" className="Number">
      <Button {...dec}>-</Button>
      <Input {...input} className="prime-number-input" />
      <Button {...inc}>+</Button>
    </HStack>
  );
}

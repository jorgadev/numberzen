import React from "react";
import { Center, Heading } from "@chakra-ui/react";

import Number from "./Number";
import Translate from "../languages/Translate";

export default function PrimeNumber() {
  return (
    <Center flexDirection="column">
      <Heading marginBottom={20}>
        <Translate string={"primeNumberChecker"} />
      </Heading>
      <Number />
      <Heading size="md" marginTop={18} color="red.500">
        <Translate string={"no"} />! 4 <Translate string={"notPrime"} />.
      </Heading>
    </Center>
  );
}

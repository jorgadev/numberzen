import React, { useState } from "react";
import { Center, Heading } from "@chakra-ui/react";

import Number from "./Number";
import Translate from "../languages/Translate";

export default function PrimeNumber() {
  const [isPrime, setIsPrime] = useState(false);
  const [number, setNumber] = useState(0);

  return (
    <Center flexDirection="column">
      <Heading marginBottom={20}>
        <Translate string={"primeNumberChecker"} />
      </Heading>
      <Number setIsPrime={setIsPrime} setNumber={setNumber} />
      {isPrime ? (
        <Heading size="md" marginTop={20} color="green.500">
          <Translate string={"yes"} />! {number}{" "}
          <Translate string={"isPrime"} />.{" "}
        </Heading>
      ) : (
        <Heading size="md" marginTop={20} color="red.500">
          <Translate string={"no"} />! {number}{" "}
          <Translate string={"notPrime"} />.{" "}
        </Heading>
      )}
    </Center>
  );
}

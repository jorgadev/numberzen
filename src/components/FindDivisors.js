import React, { useState, useContext } from "react";
import { Center, Heading } from "@chakra-ui/react";

import { ThemeContext } from "../contexts/ThemeContext";

import Dividend from "./Dividend";
import Translate from "../languages/Translate";

export default function Divisibility() {
  const theme = useContext(ThemeContext);

  return (
    <Center flexDirection="column">
      <Heading marginBottom={20} textAlign="center" color={theme.color}>
        <Translate string={"findDivisors"} />
      </Heading>
      <Dividend />
    </Center>
  );
}

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Center, Button } from "@chakra-ui/react";

import Translate from "../languages/Translate";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Menu() {
  const theme = useContext(ThemeContext);

  return (
    <Center>
      <Link to={"/prime-number"}>
        <Button variant={theme.btnVariant} m={1}>
          <Translate string={"primeNumber"} />
        </Button>
      </Link>
      <Link to={"/divisibility"}>
        <Button variant={theme.btnVariant} m={1}>
          <Translate string={"divisibility"} />
        </Button>
      </Link>
    </Center>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import { Center, Button } from "@chakra-ui/react";

import Translate from "../languages/Translate";

export default function Menu() {
  return (
    <Center>
      <Link to={"/prime-number"}>
        <Button variant="outline" m={1}>
          <Translate string={"primeNumber"} />
        </Button>
      </Link>
      <Link to={"/divisibility"}>
        <Button variant="outline" m={1}>
          <Translate string={"divisibility"} />
        </Button>
      </Link>
    </Center>
  );
}

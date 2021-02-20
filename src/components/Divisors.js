import React from "react";

import { Flex, Tag } from "@chakra-ui/react";

export default function Divisors({ divisors }) {
  return (
    <Flex marginTop={20} flexWrap="wrap" justifyContent="center" p={5}>
      {divisors.map((divisor) => (
        <Tag margin={1}>{divisor}</Tag>
      ))}
    </Flex>
  );
}

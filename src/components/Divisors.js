import React from "react";

import { Flex, Tag } from "@chakra-ui/react";

export default function Divisors({ divisors }) {
  return (
    <Flex marginTop={20} flexWrap="wrap" justifyContent="center" p={5}>
      {divisors.map((divisor, idx) => (
        <Tag margin={1} key={idx} fontSize={32} fontWeight={300}>
          {divisor}
        </Tag>
      ))}
    </Flex>
  );
}

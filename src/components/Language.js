import React, { useContext } from "react";
import Flags from "country-flag-icons/react/1x1";

import { Grid } from "@chakra-ui/react";

export default function Language({ setLanguage }) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={3} className="Language">
      <Flags.US
        onClick={() => {
          setLanguage("en");
        }}
        className="flag"
      />
      <Flags.RS
        onClick={() => {
          setLanguage("rs");
        }}
        className="flag"
      />
      <Flags.SI
        title="Slovenia"
        onClick={() => {
          setLanguage("sl");
        }}
        className="flag"
      />
    </Grid>
  );
}
import React, { useState, useEffect } from "react";
import { Grid, Spacer, Stack, Switch } from "@chakra-ui/react";

import Language from "./Language";

export default function Navbar({ changeLanguage }) {
  const [switchIsChecked, setSwitchIsChecked] = useState(false);

  useEffect(() => {
    console.log("change bg");
  }, [switchIsChecked]);

  return (
    <Grid className="Navbar" templateColumns="150px auto 120px" p={5}>
      <Switch
        size="lg"
        isChecked={switchIsChecked}
        onChange={() => setSwitchIsChecked((prevState) => !prevState)}
      />
      <Spacer />
      <Language changeLanguage={changeLanguage} />
    </Grid>
  );
}

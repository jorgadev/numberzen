import React, { useState, useEffect, useContext } from "react";
import { Grid, Spacer, Stack, Switch } from "@chakra-ui/react";

import Language from "./Language";
import { ThemeContext, themes } from "../contexts/ThemeContext";

export default function Navbar({ setLanguage, setTheme }) {
  const [switchIsChecked, setSwitchIsChecked] = useState(false);

  const theme = useContext(ThemeContext);

  useEffect(() => {
    return switchIsChecked ? setTheme(themes.dark) : setTheme(themes.light);
  }, [switchIsChecked]);

  return (
    <Grid className="Navbar" templateColumns="50px auto 120px" p={5}>
      <Switch
        size="lg"
        isChecked={switchIsChecked}
        onChange={() => setSwitchIsChecked((prevState) => !prevState)}
      />
      <Spacer />
      <Language setLanguage={setLanguage} />
    </Grid>
  );
}

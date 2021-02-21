import React, { useState, useEffect, useContext } from "react";
import { Grid, Spacer, Switch } from "@chakra-ui/react";

import Language from "./Language";
import { themes } from "../contexts/ThemeContext";

export default function Navbar({ setLanguage, setTheme }) {
  // By default set dark theme to false
  const darkTheme = localStorage.getItem("dark-theme");
  if (!darkTheme) {
    localStorage.setItem("dark-theme", "false");
  }

  // When switch is true dark theme is active and vice versa
  const [switchIsChecked, setSwitchIsChecked] = useState(
    JSON.parse(localStorage.getItem("dark-theme"))
  );

  // On first load set switch to value from LS
  useEffect(() => {
    setSwitchIsChecked(JSON.parse(darkTheme));
  }, []);

  // Toggle theme on switch value change
  useEffect(() => {
    return switchIsChecked
      ? (localStorage.setItem("dark-theme", "true"), setTheme(themes.dark))
      : (localStorage.setItem("dark-theme", "false"), setTheme(themes.light));
  }, [switchIsChecked]);

  return (
    <Grid className="Navbar" templateColumns="50px auto 120px" p={5}>
      <Switch
        size="lg"
        isChecked={switchIsChecked}
        onChange={() => {
          setSwitchIsChecked((prevState) => !prevState);
        }}
      />
      <Spacer />
      <Language setLanguage={setLanguage} />
    </Grid>
  );
}

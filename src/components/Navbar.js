import React, { useState, useEffect, useContext } from "react";
import { Grid, Spacer, Switch } from "@chakra-ui/react";

import Language from "./Language";
import { themes } from "../contexts/ThemeContext";

export default function Navbar({ setLanguage, setTheme }) {
  const darkTheme = localStorage.getItem("dark-theme");
  if (!darkTheme) {
    localStorage.setItem("dark-theme", "false");
  }

  const [switchIsChecked, setSwitchIsChecked] = useState(
    JSON.parse(localStorage.getItem("dark-theme"))
  );

  useEffect(() => {
    setSwitchIsChecked(JSON.parse(darkTheme));
  }, []);

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

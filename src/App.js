import React, { useState } from "react";
import "./App.scss";
import { Grid } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import PrimeNumber from "./components/PrimeNumber";
import Divisibility from "./components/Divisibility";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";

export default function App() {
  const [preferredLanguage, setPreferredLanguage] = useState("en");

  return (
    <Router>
      <ThemeContext.Provider>
        <LanguageContext.Provider value={preferredLanguage}>
          <Grid templateRows="10% auto 20%" height="100vh">
            <Navbar changeLanguage={setPreferredLanguage} />
            <Route exact path="/">
              <Redirect to="/prime-number" />
            </Route>
            <Route path="/prime-number" component={PrimeNumber} />
            <Route path="/divisibility" component={Divisibility} />
            <Menu />
          </Grid>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </Router>
  );
}

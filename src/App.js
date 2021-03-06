import React, { useState, useEffect, useContext } from "react";
import "./App.scss";
import { Grid, Spinner, Fade, useDisclosure } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import PrimeNumber from "./components/PrimeNumber";
import FindDivisors from "./components/FindDivisors";
import ParticlesBg from "./components/ParticlesBg";

import { LanguageContext } from "./contexts/LanguageContext";
import { ThemeContext, themes } from "./contexts/ThemeContext";

export default function App() {
  // Set lang to "en" by default
  const lang = localStorage.getItem("lang");
  if (!lang) {
    localStorage.setItem("lang", "en");
  }

  const [language, setLanguage] = useState(localStorage.getItem("lang"));
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState(themes.light);

  // On first load show spinner for 1 second
  useEffect(() => {
    setIsLoading(true);
    let timer = setTimeout(() => setIsLoading(false), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      <LanguageContext.Provider value={language}>
        <ThemeContext.Provider value={theme}>
          {isLoading ? (
            <Spinner
              size="xl"
              speed="0.65s"
              emptyColor="gray.200"
              color="red.500"
              thickness="4px"
              className="spinner"
            />
          ) : (
            <Fade in={true} className="App">
              <ParticlesBg />
              <Grid
                templateRows="10% auto 20%"
                height="100vh"
                backgroundColor="transparent"
                w
                className="app-wrapper"
              >
                <Navbar setLanguage={setLanguage} setTheme={setTheme} />
                <Route exact path="/">
                  <Redirect to="/prime-number" />
                </Route>
                <Route path="/prime-number" component={PrimeNumber} />
                <Route path="/divisors" component={FindDivisors} />
                <Menu />
              </Grid>
            </Fade>
          )}
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </Router>
  );
}

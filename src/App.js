import React, { useState, useEffect, useContext } from "react";
import "./App.scss";
import { Grid, Spinner } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import PrimeNumber from "./components/PrimeNumber";
import Divisibility from "./components/Divisibility";
import { LanguageContext } from "./contexts/LanguageContext";
import { ThemeContext, themes } from "./contexts/ThemeContext";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState(themes.light);

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
            <Grid
              templateRows="10% auto 20%"
              height="100vh"
              background={theme.background}
            >
              <Navbar setLanguage={setLanguage} setTheme={setTheme} />
              <Route exact path="/">
                <Redirect to="/prime-number" />
              </Route>
              <Route path="/prime-number" component={PrimeNumber} />
              <Route path="/divisibility" component={Divisibility} />
              <Menu />
            </Grid>
          )}
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </Router>
  );
}

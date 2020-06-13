import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as ThemeStyled } from "styled-components";
import GlobalStyle, {
  themeStyled,
  themeMaterialUi,
} from "./components/GlobalStyle";
import "./components/ServiceWorkerWrapper";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/date-fns";
import Loading from "./components/Loading";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

export default function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<Loading />}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <ThemeProvider theme={themeMaterialUi}>
            <ThemeStyled theme={themeStyled}>
              <GlobalStyle />
              <Router>
                <Switch>
                  <Route path="/register">
                    <Register />
                  </Route>
                  <Route path="/dash">
                    <Home />
                  </Route>
                  <Route path="/">
                    <Login />
                  </Route>
                </Switch>
              </Router>
            </ThemeStyled>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </Suspense>
    </React.Fragment>
  );
}

import React, { Suspense, lazy } from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as ThemeStyled } from "styled-components";
import GlobalStyle, {
  themeStyled,
  themeMaterialUi,
} from "./components/GlobalStyle";

import Loading from "./components/Loading";
const Home = lazy(() => import("./pages/Home"));

export default function App() {
  return (
    // <ErrorBoundary>
    <React.Fragment>
      <Suspense fallback={<Loading />}>
        <ThemeProvider theme={themeMaterialUi}>
          <ThemeStyled theme={themeStyled}>
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
            <GlobalStyle />
            <Home></Home>
            {/* <Router>
                  <Switch>
                    <Route path="/register">
                      <Register />
                    </Route>
                    <Route path="/dash">
                      <DashBoard />
                    </Route>
                    <Route path="/">
                      <Login />
                    </Route>
                    <Route path="*">
                      <NotFound />
                    </Route>
                  </Switch>
                </Router> */}
            {/* </MuiPickersUtilsProvider> */}
          </ThemeStyled>
        </ThemeProvider>
      </Suspense>
    </React.Fragment>
  );
}

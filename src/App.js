import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import NotFound from "./screens/NotFound";
import { client, isLoggedInVar, darkModeVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./styles";
import routes from "./screens/routes";



function App() {

  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route path={routes.home} exact element={ isLoggedIn ? ( 
                <Home /> 
                ) : (
                <Login />
                )}/>
              {!isLoggedIn ? <Route path={routes.signUp} element={<SignUp />} /> : null}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
      </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;

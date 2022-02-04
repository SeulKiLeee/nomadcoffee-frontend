import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import { isLoggedInVar, darkModeVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./styles";



function App() {

  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" exact element={ isLoggedIn ? ( 
              <Home /> 
              ) : (
              <Login />
              )}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;

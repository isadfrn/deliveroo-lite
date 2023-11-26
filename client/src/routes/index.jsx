import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/theme";
import GlobalStyles from "../styles/global";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <AuthRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

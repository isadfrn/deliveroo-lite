import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/theme";
import GlobalStyles from "../styles/global";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

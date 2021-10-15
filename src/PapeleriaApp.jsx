import React from "react";
import { AppRouter } from "./routes/AppRouter";

import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./themeConfig";

export const PapeleriaApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

import React from "react";
import { AppRouter } from "./routes/AppRouter";

import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./themeConfig";
import { AuthProvider } from "./context/AuthContext";

export const PapeleriaApp = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </AuthProvider>
  );
};

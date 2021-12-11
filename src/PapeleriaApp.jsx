import React from "react";
import { AppRouter } from "./routes/AppRouter";

import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./themeConfig";
import { AuthProvider } from "./context/AuthContext";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const PapeleriaApp = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </AuthProvider>
    </MuiPickersUtilsProvider>
  );
};

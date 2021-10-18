import React from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonEdit: {
    color: "#3DA939",
  },
}));

export const ButtonEditCategoria = () => {
  const classes = useStyles();
  return (
    <IconButton classes={{ label: classes.buttonEdit }}>
      <EditIcon />
    </IconButton>
  );
};

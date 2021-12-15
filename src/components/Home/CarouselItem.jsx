import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 600,
    [theme.breakpoints.down("sm")]: {
      height: 450,
    },
  },
  overlay: {
    height: 600,
    [theme.breakpoints.down("sm")]: {
      height: 450,
    },
    background: " rgba(0, 0, 0, .6)",
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 600,
    [theme.breakpoints.down("sm")]: {
      height: 450,
    },
    paddingBottom: 100,
  },
  fontStyle: {
    fontStyle: "italic",
    color: "#FFF",
  },
}));

export const CarouselItem = ({ data }) => {
  const classes = useStyles();

  return (
    <>
      <CardMedia
        className={classes.media}
        image={data.img}
        title={data.title}
        style={{ backgroundPosition: data.position }}
      />
      <div className={classes.overlay}>
        <div className={classes.title}>
          <Typography
            variant="h4"
            color="textPrimary"
            align="center"
            className={classes.fontStyle}
          >
            {data.title}
          </Typography>
        </div>
      </div>
    </>
  );
};

import React from "react";
import { default as CarouselMUI } from "react-material-ui-carousel";
import MainImg from "../../assets/main.jpeg";
import Main2Img from "../../assets/main2.jpeg";
import ProductsImg from "../../assets/products.jpeg";
import AtencionImg from "../../assets/atencion.jpeg";
import { CarouselItem } from "./CarouselItem";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  hola: {
    margin: theme.spacing(0, -2),
    marginTop: theme.spacing(-11),
  },
}));
const data = [
  {
    id: 1,
    title: "Papelería Studios",
    img: MainImg,
    position: "top",
  },
  {
    id: 2,
    title: "Tu papelería de confianza",
    img: Main2Img,
    position: "center",
  },
  {
    id: 3,
    title: "Variedad en productos",
    img: ProductsImg,
    position: "top",
  },
  {
    id: 4,
    title: "Una atención personalizada",
    img: AtencionImg,
    position: "top",
  },
];
export const Carousel = () => {
  const classes = useStyles();
  return (
    <CarouselMUI animation="fade" className={classes.hola}>
      {data.map((item) => {
        return <CarouselItem key={item.id} data={item} />;
      })}
    </CarouselMUI>
  );
};

import React from "react";
import { Carousel } from "../components/Home/Carousel";
import { ProductsMostSelled } from "../components/Home/ProductsMostSelled";

export const Home = () => {
  return (
    <>
      <Carousel />
      <ProductsMostSelled />
    </>
  );
};

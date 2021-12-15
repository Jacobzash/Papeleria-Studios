import React from "react";

import { EstadisticasGenerales } from "./EstadisticasGenerales";
import { EstadisticasProductos } from "./EstadisticasProductos";
import { EstadisticasCategorias } from "./EstadisticasCategorias";
import { EstadisticasProveedores } from "./EstadisticasProveedores";

export const ListEstadisticias = ({ statistics }) => {
  const {
    PMostSelled,
    PMostSalesRecords,
    PHighestQuantitySold,
    CMoreProducts,
    PrMoreProducts,
    PLessSelled,
    PLessSalesRecords,
    PLessQuantitySold,
    CFewerProducts,
    PrFewerProducts,
    TotallyDataSystem,
  } = statistics;
  return (
    <div>
      <EstadisticasGenerales data={TotallyDataSystem} />
      <EstadisticasProductos
        data={{
          PMostSelled,
          PLessSelled,
          PMostSalesRecords,
          PLessSalesRecords,
          PHighestQuantitySold,
          PLessQuantitySold,
        }}
      />
      <EstadisticasCategorias data={{ CMoreProducts, CFewerProducts }} />
      <EstadisticasProveedores data={{ PrMoreProducts, PrFewerProducts }} />
    </div>
  );
};

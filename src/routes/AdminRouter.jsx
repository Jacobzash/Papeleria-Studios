import React from "react";
import { Route, Switch } from "react-router-dom";
import { Categoria } from "../pages/Categoria";
import { Admin } from "../pages/Admin";
import { Error404 } from "../pages/Error404";
export const AdminRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/categorias" component={Categoria} />
        <Route exact path="/admin/productos" component={Categoria} />
        <Route exact path="/admin/proveedores" component={Categoria} />
        <Route exact path="/admin/inventario" component={Categoria} />
        <Route exact path="/admin/ventas" component={Categoria} />
        <Route exact path="/admin/estadisticas" component={Categoria} />
        <Route component={Error404} />
      </Switch>
    </>
  );
};

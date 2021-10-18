import React from "react";
import { Route, Switch } from "react-router-dom";
import { Categorias } from "../pages/Categorias";
import { Admin } from "../pages/Admin";
import { Error404 } from "../pages/Error404";
export const AdminRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/categorias" component={Categorias} />
        <Route exact path="/admin/productos" component={Categorias} />
        <Route exact path="/admin/proveedores" component={Categorias} />
        <Route exact path="/admin/inventario" component={Categorias} />
        <Route exact path="/admin/ventas" component={Categorias} />
        <Route exact path="/admin/estadisticas" component={Categorias} />
        <Route component={Error404} />
      </Switch>
    </>
  );
};

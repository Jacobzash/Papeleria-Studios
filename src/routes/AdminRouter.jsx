import React from "react";
import { Route, Switch } from "react-router-dom";
import { Categorias } from "../pages/Admin/Categorias";
import { Admin } from "../pages/Admin";
import { Error404 } from "../pages/Error404";
import { Proveedores } from "../pages/Admin/Proveedores";
import { Productos } from "../pages/Admin/Productos";
import { ProvidersProvider } from "../context/ProvidersContext";
import { CategoriesProvider } from "../context/CategoriesContext";

export const AdminRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <CategoriesProvider>
          <Route exact path="/admin/categorias" component={Categorias} />
        </CategoriesProvider>
        <ProvidersProvider>
          <Route exact path="/admin/proveedores" component={Proveedores} />
        </ProvidersProvider>
        <Route exact path="/admin/productos" component={Productos} />
        <Route exact path="/admin/inventario" component={Categorias} />
        <Route exact path="/admin/ventas" component={Categorias} />
        <Route exact path="/admin/estadisticas" component={Categorias} />
        <Route component={Error404} />
      </Switch>
    </>
  );
};

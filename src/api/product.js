import axios from "axios";
import getToken from "../utils/getToken";
import { apiVersion, basePath } from "./config";

const urlBase = `${basePath}/${apiVersion}/product`;

export const getProductsApi = async () => {
  const url = `${urlBase}`;
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    "x-token": token,
  };
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return error.message;
    }
  }
};
export const getProductsForUserApi = async () => {
  const url = `${urlBase}/products`;
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return error.message;
    }
  }
};
export const createProductApi = async ({
  nom_produc: nombre,
  valor_unitario: precio,
  url_image,
  id_categoria,
  id_proveedor,
}) => {
  const url = `${urlBase}`;
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    "x-token": token,
  };
  url_image = await uploadImageProductApi(url_image);
  if (url_image === null) {
    return {
      ok: false,
      msg: "No se pudo subir la imagen",
    };
  }
  try {
    const response = await axios.post(
      url,
      { nombre, precio, url_image, id_categoria, id_proveedor },
      { headers }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return error.message;
    }
  }
};

export const updateProductApi = async (
  {
    id,
    nom_produc: nombre,
    valor_unitario: precio,
    url_image,
    id_categoria,
    id_proveedor,
  },
  changeImagen
) => {
  const url = `${urlBase}`;
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    "x-token": token,
  };
  if (changeImagen) {
    url_image = await uploadImageProductApi(url_image);
    if (url_image === null) {
      return {
        ok: false,
        msg: "No se pudo subir la imagen",
      };
    }
  }
  try {
    const response = await axios.put(
      url,
      { id, nombre, precio, url_image, id_categoria, id_proveedor },
      { headers }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return error.message;
    }
  }
};
export const deleteProductApi = async (id) => {
  const url = `${urlBase}`;
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    "x-token": token,
  };
  try {
    const response = await axios.delete(url, {
      headers,
      data: { id },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return error.message;
    }
  }
};

const uploadImageProductApi = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/dnnahcrob/image/upload";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "papeleria-studios");

  try {
    const resp = await axios.post(cloudUrl, formData);
    if (resp.status === 200) {
      return resp.data.secure_url;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
  }
};

import { get,put,del } from "./mainclient";


export const getproducts = async (sort) => {
    const sub = await get(`/products?sort=${sort}`).then((resp) => {
      return resp;
    });
    return sub;
  };


  export const getCatagory = async (name) => {
    const sub = await get(`/products/category/${name}`).then((resp) => {
      return resp;
    });
    return sub;
  };


export const getindivialproduct = async (id) => {
    const sub = await get(`/products/${id}`).then((resp) => {
      return resp;
    });
    return sub;
  };

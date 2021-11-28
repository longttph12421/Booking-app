import axiosHelper from "../common/axiosHelper";
import constants from "../configures/constants";

const url = (category) => {
  return `category/${category ? category : 1}/product`;
};

export const getList = () => {
  const data = [
    {
      direction: "asc",
      property: "id",
    },
  ];
  return axiosHelper.post(`${constants.API_URL}rest/product/getAll`,data);
};

export const findById = (id) => {
  
  
  return axiosHelper.get(`${constants.API_URL}rest/product/${id}`);
};
export function Search(params) {
  return axiosHelper.get(`${constants.API_URL}/${url(1)}?search=${params}`);
}

export const addProduct = (data) => {
  return axiosHelper.post(`${constants.API_URL}rest/product/create`, data);
};

export const updateProduct = (payload) => {
  return axiosHelper.put(
    `${constants.API_URL}/${url(payload.category)}/${payload.id}`,
    payload
  );
};


export const deleteProduct = (data) => {
  return axiosHelper.delete(
    `${constants.API_URL}/${url(data.categoryId)}/${data.id}`
  );
};

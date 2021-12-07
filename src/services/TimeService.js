import axiosHelper from "../common/axiosHelper";
import constants from "../configures/constants";
export const getAll = () => {
  const data = [
    {
      direction: "asc",
      property: "id",
    },
  ];
  return axiosHelper.post(`${constants.API_URL}rest/time/getAll`,data);
};

export function findById(id) {
  return axiosHelper.get(`${constants.API_URL}rest/time/${id}`);
}
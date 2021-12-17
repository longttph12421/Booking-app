import axiosHelper from "../common/axiosHelper";
import path from "../configures/constants";
export const getAll = () => {
  return axiosHelper.post(path.doctor.GET_ALL_DOCTOR);
};

export function findById(id) {
  return axiosHelper.get(path.doctor.GET_ALL_DOCTOR);
}
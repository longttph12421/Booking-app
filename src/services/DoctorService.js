import axiosHelper from "../common/axiosHelper";
import path from "../configures/constants";

export const findAll = () => {
  return axiosHelper.get(path.doctor.GET_ALL_DOCTOR);
};

export const findById = (id) => {
  return axiosHelper.get(`${path.doctor.GET_DOCTOR_BY_ID}/${id}`);
};
export const findByUserId = (id) => {
  return axiosHelper.post(path.doctor.GET_DOCTOR_BY_ID, id);
};

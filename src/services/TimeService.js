import axiosHelper from "../common/axiosHelper";
import path from "../configures/constants";

export const findWeekByDoctorAndStatus = (body) => {
  return axiosHelper.post(path.time.GET_BY_DOCTOR, body);
};

export const findDayByDoctorAndDay = (body) => {
  return axiosHelper.post(path.time.GET_DAY_BY_STAFF, body);
};
export const saveDayByDoctor = (body) => {
  return axiosHelper.post(path.time.SAVE_DAY_BY_STAFF, body);
};

export const findDayByWeek = (body) => {
  return axiosHelper.post(path.time.GET_DAY_BY_WEEK, body);
};

export const deleteByDoctor = (id) => {
  return axiosHelper.delete(`${path.time.DELETE_BY_STAFF}/${id}`);
};

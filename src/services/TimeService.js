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
export const findDayByWeekId = (id) => {
  return axiosHelper.get(`${path.time.GET_DAY_BY_WEEK_ID}/${id}`);
};

export const deleteByDoctor = (id) => {
  return axiosHelper.delete(`${path.time.DELETE_BY_STAFF}/${id}`);
};
export const savaTime = (body) => {
  return axiosHelper.post(path.time.SAVE_TIME, body);
};
export const updateTime = (body) => {
  return axiosHelper.put(path.time.UPDATE_TIME, body);
};
export const deleteTimeById = (id) => {
  return axiosHelper.delete(`${path.time.DELETE_TIME_BY_ID}/${id}`);
};

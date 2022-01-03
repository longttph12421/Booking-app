import axiosHelper from "../common/axiosHelper";
import path from "../configures/constants";

export const findWeekByDoctorAndStatus = (body) => {
  return axiosHelper.post(path.time.GET_BY_DOCTOR, body);
};

export const findDayByDoctorAndDay = (body) => {
  return axiosHelper.post(path.time.GET_DAY_BY_STAFF, body);
};

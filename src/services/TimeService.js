import axiosHelper from "../common/axiosHelper";
import path from "../configures/constants";
export const findWeekByDoctorAndStatus = (body) => {
  return axiosHelper.post(path.time.GET_BY_DOCTOR, body);
};

// export function findById(id) {
//   return axiosHelper.get(`${constants.API_URL}rest/time/${id}`);
// }

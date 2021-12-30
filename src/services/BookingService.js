import axiosHelper from "../common/axiosHelper";
import path from "../configures/constants";
export const booking = (data) => {
  return axiosHelper.post(path.booking.POST_BOOKING, data);
};

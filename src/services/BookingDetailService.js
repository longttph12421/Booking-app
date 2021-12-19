import axiosHelper from '../common/axiosHelper';
import path from "../configures/constants";
export function getAllBooking() {
    return axiosHelper.get(path.bookingdetail.GET_ALL_BOOKINGDETAIL);
  }
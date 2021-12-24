import axiosHelper from '../common/axiosHelper';
import path from "../configures/constants";

export function getAllBooking() {
    return axiosHelper.get(path.bookingdetail.GET_ALL_BOOKINGDETAIL);
}
  export function getFindByStt1() {
    return axiosHelper.get(path.bookingdetail.GET_ALL_BOOKINGDETAIL+"/1");
  }
  export function getFindByStt2() {
    return axiosHelper.get(path.bookingdetail.GET_ALL_BOOKINGDETAIL+"/2");
  }
  export function getFindByStt3() {
    return axiosHelper.get(path.bookingdetail.GET_ALL_BOOKINGDETAIL+"/3");
  }

  export function putConfirmBooking(data) {
    return axiosHelper.put(path.bookingdetail.PUT_CONFIRM_BOOKING,data );
  }
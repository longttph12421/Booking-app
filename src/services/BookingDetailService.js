import axiosHelper from "../common/axiosHelper";
import path from "../configures/constants";

export function getAllBooking() {
  return axiosHelper.get(path.bookingDetail.GET_ALL_BOOKING_DETAIL);
}
export function getFindByStt1() {
  return axiosHelper.get(path.bookingDetail.GET_ALL_BOOKING_DETAIL + "/1");
}
export function getFindByStt2() {
  return axiosHelper.get(path.bookingDetail.GET_ALL_BOOKING_DETAIL + "/2");
}
export function getFindByStt3() {
  return axiosHelper.get(path.bookingDetail.GET_ALL_BOOKING_DETAIL + "/3");
}

export function putConfirmBooking(data) {
  return axiosHelper.put(path.bookingDetail.PUT_CONFIRM_BOOKING, data);
}

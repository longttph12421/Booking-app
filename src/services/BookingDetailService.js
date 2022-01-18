import axiosHelper from "../common/axiosHelper";
import path from "../configures/constants";

export function getAllBooking() {
  return axiosHelper.get(path.bookingDetail.GET_ALL_BOOKING_DETAIL);
}
export function findByStatus(status) {
  return axiosHelper.get(
    path.bookingDetail.GET_ALL_BOOKING_DETAIL + `/${status}`
  );
}

export function putConfirmBooking(data) {
  return axiosHelper.put(path.bookingDetail.PUT_CONFIRM_BOOKING, data);
}

export function updateStatus(data) {
  return axiosHelper.put(path.bookingDetail.UPDATE_STATUS, data);
}

export function findByCustomer(data) {
  return axiosHelper.post(path.bookingDetail.FIND_BY_CUSTOMER, data);
}

export const updateBookingDetail = (data) => {
  return axiosHelper.put(path.bookingDetail.UPDATE_BOOKING_DETAIL, data);
};

export function deleteById(id) {
  return axiosHelper.put(`${path.bookingDetail.DELETE_BY_ID}/${id}`);
}

export function searchByDoctor(data) {
  return axiosHelper.post(path.bookingDetail.SEARCH_BY_DOCTOR, data);
}

export function searchByDate(data) {
  return axiosHelper.post(path.bookingDetail.SEARCH_BY_DATE, data);
}

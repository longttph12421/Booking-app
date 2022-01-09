const path = {
  auth: {
    LOGIN_TOKEN: "http://localhost:6769/api/auth/login",
    REGISTER_USER: "http://localhost:6769/api/auth/register",
  },
  product: {
    GET_ALL_PRODUCT: "http://localhost:6769/rest/customer/getAll",
  },
  time: {
    GET_BY_DOCTOR: "http://localhost:6769/api/week/findByStaffIdAndStatus",
    GET_DAY_BY_STAFF: "http://localhost:6769/api/day/findByStaffIdAndStatus",
    GET_DAY_BY_WEEK: "http://localhost:6769/api/day/findByWeek",
    GET_DAY_BY_WEEK_ID: "http://localhost:6769/api/day/findByWeekId",
    SAVE_DAY_BY_STAFF: "http://localhost:6769/api/week/create",
    DELETE_BY_STAFF: "http://localhost:6769/api/week/delete",
    SAVE_TIME: "http://localhost:6769/api/day/create",
    UPDATE_TIME: "http://localhost:6769/api/day/update",
    DELETE_TIME_BY_ID: "http://localhost:6769/api/day/delete",
  },
  booking: {
    POST_BOOKING: "http://localhost:6769/api/booking/create",
  },

  doctor: {
    GET_ALL_DOCTOR: "http://localhost:6769/api/staff/getAll",
    GET_ALL_BY_ROLE: "http://localhost:6769/api/staff/findByRole",
    GET_DOCTOR_BY_ID: "http://localhost:6769/api/staff",
  },

  bookingDetail: {
    GET_ALL_BOOKING_DETAIL: "http://localhost:6769/api/auth/admin/allbooking",
    PUT_CONFIRM_BOOKING: "http://localhost:6769/api/auth/admin/confirm",
    FIND_BY_CUSTOMER: "http://localhost:6769/api/auth/admin/findByCustomer",
    DELETE_BY_ID: "http://localhost:6769/api/auth/admin/cancel",
  },

  service: {
    GET_ALL_SERVICE: "http://localhost:6769/api/auth/admin/allservice",
    POST_SERVICE: "http://localhost:6769/api/auth/admin/save",
    PUT_SERVICE: "http://localhost:6769/api/auth/admin/update",
    DELETE_SERVICE: "http://localhost:6769/api/auth/admin/delete",
  },
};
export default path;

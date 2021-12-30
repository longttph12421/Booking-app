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
  },
  booking: {
    POST_BOOKING: "http://localhost:6769/api/booking/create",
  },

  doctor: {
    GET_ALL_DOCTOR: "http://localhost:6769/api/staff/getAll",
    GET_DOCTOR_BY_ID: "http://localhost:6769/api/staff",
  },
  
  bookingdetail: {
    GET_ALL_BOOKINGDETAIL: "http://localhost:6769/api/auth/admin/allbooking",
    PUT_CONFIRM_BOOKING:"http://localhost:6769/api/auth/admin/confirm",
  },

  servicecustumer:{
    GET_ALL_SERVICECUSTUMER:"http://localhost:6769/api/auth/admin/allservice",
    POST_SERVICECUSTUMER:"http://localhost:6769/api/auth/admin/save",
    PUT_SERVICECUSTUMER:"http://localhost:6769/api/auth/admin/update",
  }
  
};
export default path;

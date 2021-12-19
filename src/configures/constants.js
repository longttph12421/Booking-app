const path = {
  auth: {
    LOGIN_TOKEN: "http://localhost:6769/api/auth/login",
  },
  product: {
    GET_ALL_PRODUCT: "http://localhost:6769/rest/customer/getAll",
  },
  time: {
    GET_ALL_TIME: "http://localhost:6769/rest/customer/getAll",
  },
  doctor: {
    GET_ALL_DOCTOR: "http://localhost:6769/rest/customer/getAll",
  },
  
  bookingdetail: {
    GET_ALL_BOOKINGDETAIL: "http://localhost:6769/api/auth/admin/allbooking",
  },

  servicecustumer:{
    GET_ALL_SERVICECUSTUMER:"http://localhost:6769/api/auth/admin/allservice",
  }
};
export default path;

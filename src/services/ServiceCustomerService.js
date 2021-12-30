import axiosHelper from '../common/axiosHelper';
import path from "../configures/constants";
export function getAllServiceCustomer() {
    return axiosHelper.get(path.servicecustumer.GET_ALL_SERVICECUSTUMER);
  }
  export function postServiceCustomer(data) {
    return axiosHelper.post(path.servicecustumer.POST_SERVICECUSTUMER,data);
  }
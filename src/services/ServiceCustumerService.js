import axiosHelper from '../common/axiosHelper';
import path from "../configures/constants";
export function getAllServiceCustumer() {
    return axiosHelper.get(path.servicecustumer.GET_ALL_SERVICECUSTUMER);
  }
  export function postServiceCustumer(data) {
    return axiosHelper.post(path.servicecustumer.POST_SERVICECUSTUMER,data);
  }
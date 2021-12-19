import axiosHelper from '../common/axiosHelper';
import path from "../configures/constants";
export function getAllServiceCustumer() {
    return axiosHelper.get(path.servicecustumer.GET_ALL_SERVICECUSTUMER);
  }
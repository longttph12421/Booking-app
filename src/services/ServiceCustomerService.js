import axiosHelper from "../common/axiosHelper";
import path from "../configures/constants";

export function getAllServiceCustomer() {
  return axiosHelper.get(path.service.GET_ALL_SERVICE);
}

export function postServiceCustomer(data) {
  return axiosHelper.post(path.service.POST_SERVICE, data);
}

export function deleteService(id) {
  return axiosHelper.delete(`${path.service.DELETE_SERVICE}/${id}`);
}

import axiosHelper from "../common/axiosHelper";
import path from "../configures/constants";
export function getListCustomer(){
    return axiosHelper.get(path.account.GET_CUSTOMERS);
};

export function getListDocTorAndStaff(data){
    return axiosHelper.post(path.account.GET_DOCTOR,data);
};
import axiosHelper from "../common/axiosHelper";
import path from "../configures/constants";
export function getListCustomer(){
    return axiosHelper.get(path.account.GET_CUSTOMERS);
};

export function getListDocTorAndStaff(data){
    return axiosHelper.post(path.account.GET_DOCTOR,data);
};

export function insertDoctor(data) {
    return axiosHelper.post(path.account.POST_DOCTOR, data);
}

export function insertStaff(data) {
    return axiosHelper.post(path.account.POST_STAFF, data);
}
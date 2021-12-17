import {GET_CUSTOMERS} from "../configures/constants";
import axiosHelper from '../common/axiosHelper';
export class CustomerService{
    getListCustomer = () =>{
        return axiosHelper.post(GET_CUSTOMERS,[],null,false);
    }

}
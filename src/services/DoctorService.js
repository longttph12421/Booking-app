import axiosHelper from '../common/axiosHelper';

export const getList = () =>{
    return axiosHelper.get(`https://6012349784695f0017779d27.mockapi.io/vanh/stasf`);
}
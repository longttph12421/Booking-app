import axiosHelper from "../../common/axiosHelper";
import path from "../../configures/constants";

export const loginToken = (user) => {
  return axiosHelper.post(path.auth.LOGIN_TOKEN,user);
};


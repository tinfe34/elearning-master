import Axios from "axios";
import {
  API_SIGN_IN,
  API_SIGN_UP,
  API_INFO_PROFILE,
} from "../Constants/endpoints";

const userLogin = JSON.parse(localStorage.getItem("userLogin"));
class UserService {
  signIn(user) {
    return Axios({
      method: "POST",
      url: API_SIGN_IN,
      data: user,
    });
  }

  signUp(obj) {
    return Axios({
      method: "POST",
      url: API_SIGN_UP,
      data: obj,
    });
  }

  infoProfile(user) {
    return Axios({
      method: "POST",
      url: API_INFO_PROFILE,
      data: user,
      headers: {
        Authorization: "Bearer  " + userLogin.accessToken,
      },
    });
  }
}
export default UserService;

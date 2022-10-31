import axios from '../services/axios'
import { API_LOGIN, API_REGISTER, API_PROFILE} from '../constants/endpoints'

/**
 * User Login
 * @param {Object}
 * @returns {Object}
 */
export const login = async(user) => {
    try {
        const { data } = await axios.post(
          API_LOGIN,
          user
        )
      //Set token
      return data
    } catch (error) {
        return Promise.reject(error)
    }
}

/**
 * User Register
 * @param {Object}
 * @returns {Object}
 */
 export const register = async(user) => {
  try {
      const { data } = await axios.post(
        API_REGISTER,
        user
      )
    //Set token
    return data
  } catch (error) {
      return Promise.reject(error)
  }
}

/**
 * User Profile
 * @param {Object}
 * @returns {Object}
 */
//  export const Profile = async(user) => {
//   try {
//       const { data } = await axios.post(
//         API_PROFILE,
//         user,
//         "Bearer  " + accessToken,
//       )
//     //Set token
//     return data
//   } catch (error) {
//       return Promise.reject(error)
//   }
// }

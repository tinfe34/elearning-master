
import axios from '../services/axios'
import { API_GET_COURSE, API_GET_COURSE_DETAIL } from '../constants/endpoints'

/**
 * Get list course
 * @param {Object}
 * @returns {Object}
 */
 export const getCourses = async() => {
    try {
        const { data } = await axios.get(
          `${API_GET_COURSE}?MaNhom=GP01`,
        )
      return data
    } catch (error) {
        return Promise.reject(error)
    }
  }

/**
 * Get list course
 * @param {Object}
 * @returns {Object}
 */
 export const getCoursesDetail = async(courseId) => {
  try {
      const { data } = await axios.get(
        `${API_GET_COURSE_DETAIL}?maKhoaHoc=${courseId}`,
      )
    return data
  } catch (error) {
      return Promise.reject(error)
  }
}
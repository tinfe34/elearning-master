import axios from "axios";

//request
axios.interceptors.request.use((config) => {
  if (config.headers) {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
});

export default axios;

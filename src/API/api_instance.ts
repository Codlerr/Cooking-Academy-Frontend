

import axios, { AxiosRequestHeaders } from "axios";
import { BASE_URL } from "../Constants";
import { getAccessToken } from "../helpers/localStorage";
import { logout } from "../redux/slices/authSlice";
import store from "../redux/store";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        'Device-Id': 'f4d7a5d7-6218-476e-9ed9-608d176e35b7',
        'App-Type': 'web',
        
    }
});

instance.interceptors.request.use((config) => {
    if(!config.headers) {
        config.headers = {} as AxiosRequestHeaders;
    }
    const accessToken = getAccessToken();
    if(accessToken) {
        (config.headers as any).Authorization = `Bearer ${accessToken}`;
    }
    return config;
})

instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error?.response?.status === 403) {
        store.dispatch(logout());
      }
      return Promise.reject(error);
    },
  );
  
  
export default instance;
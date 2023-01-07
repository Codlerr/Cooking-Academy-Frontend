

import axios, {AxiosInstance} from "axios";
import { BASE_URL } from "../Constants";
import { getAccessToken } from "../helpers/localStorage";

export class ApiClient {
    instance:AxiosInstance;
    constructor(baseURL: string) {
        if(baseURL) {
            this.instance = axios.create({
                baseURL,
                headers: {
                    "Content-Type": "application/json",
                    'Device-Id': 'f4d7a5d7-6218-476e-9ed9-608d176e35b7',
                    'App-Type': 'web',
                    
                }
            });
            this.applyMiddlewares()
        } else {
            throw new Error("Base URL cannot be empty");
        }
    }
    applyMiddlewares() {
        this.instance.interceptors.request.use((config) => {
            if(!config.headers) {
                config.headers = {};
            }
            const accessToken = getAccessToken();
            if(accessToken) {
                (config.headers as any).Authorization = `Bearer ${accessToken}`;
            }
            return config;
        })
        this.instance.interceptors.response.use((response) => {
            return response;
        })
    }
}

const instance = new ApiClient(BASE_URL).instance;
  
export default instance;
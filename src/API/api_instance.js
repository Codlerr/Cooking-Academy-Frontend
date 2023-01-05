

import axios from "axios";

const instance = axios.create({
    baseURL : 'http://localhost:5000/api/1.0',
    headers: {
        "Content-Type": "application/json",
        'Device-Id': 'f4d7a5d7-6218-476e-9ed9-608d176e35b7',
        'App-Type': 'web',
        
    }

  });
  
export default instance;
import axios from "axios";
import {dummyData} from "./dummy/index";
let Axios = 
!process.env.NODE_ENV || process.env.NODE_ENV==='development' ?
  axios.create({ baseURL: process.env.DEV_URL }) :
  axios.create({ baseURL: process.env.SERVER_URL })
// console.log('ENV : ', process.env.NODE_ENV)


Axios.interceptors.response.use(
  (response) => {
    const { data } = response;
    return { data: data?.data, error: false };
  },
  (error) => {
    console.log("ERROR : ", error.config.url)
    return dummyData(error.config.url)
  }
);

export default Axios;

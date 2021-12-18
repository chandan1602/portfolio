import axios from "axios";
import {dummyData} from "./dummy/index";

const Axios = axios.create({ baseURL: process.env.DEV_URL });

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

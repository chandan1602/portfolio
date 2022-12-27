import Axios from "./axios.config";

export const login = (data) => Axios.post("/manage/api/v1/signin", data);

export const validate = (data) => Axios.post("/manage/api/v1/validateRequest", data, {
    headers: {
        'Authorization': 'Bearer ' + data
    }
});
import Axios from "./axios.config";

export const postComment = (data) => {Axios.post("/comment", data);}
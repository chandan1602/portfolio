import Axios from "./axios.config";

export const getBlogs = () => Axios.get("/blogs");
export const postBlog = ({data}) => Axios.post("/blogs", data);
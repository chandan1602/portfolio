import Axios from "./axios.config";

export const getBlogs = () => Axios.get("/blogs");
export const getListings = () => Axios.get("/slugs-titles");
export const getSlugs = () => Axios.get("/slugs");
export const postBlog = ({description, title, token}) => Axios.post("/blogs", {description, title}, {
    headers : {
        'Authorization': 'Bearer ' + token
    }
});

export const getBlogBySlug = (slug) => Axios.get("/blog/" + slug);
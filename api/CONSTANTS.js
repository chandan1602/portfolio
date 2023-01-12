let baseURL; 
!process.env.NODE_ENV || process.env.NODE_ENV==='development' ? baseURL = process.env.DEV_URL : baseURL = process.env.SERVER_URL;

// export default function getBaseURL () {
//     let baseURL;
//     !process.env.NODE_ENV || process.env.NODE_ENV==='development' ? baseURL = process.env.DEV_URL : baseURL = process.env.SERVER_URL;
//     return baseURL;
// }

module.exports = {
    GET_SLUGS_URL : baseURL + "/slugs",
    GET_BLOG_BY_SLUG_URL : baseURL + "/blog/",
    GET_SLUG_TITLE_URL : baseURL + "/slugs-titles"
}
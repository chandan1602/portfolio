// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { blogService } from "../../api"

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export async function getAllBlog() {
  const {data, error} = await blogService.getBlogs();
  if(!error) {
    const paths = data.map((blog) => ({
      params: { 
        slug: blog.slug,
        title: blog.title,
        description: blog.description
      },
    }))
  
    return { paths, fallback: false }
  }

}
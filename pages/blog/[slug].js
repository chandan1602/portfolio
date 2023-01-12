import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import style from './../../styles/blogs.module.css'
import { useRouter } from 'next/router';
import { blogService } from '../../api'
import Item from '../../components/Blog/Item';
import CONSTANTS from '../../api/CONSTANTS';
import https from 'https'

const Blog = (props) => {
    const router = useRouter();
    // if(props.hasError) {
    //     return <div>Blog Does not Exist...</div>
    // }
    if (router.isFallback) return <h1>Loading...</h1>
    return (
        <Item
            key={props.data._id}
            id={props.data._id}
            description={props.data.description}
            comments={props.data.comments}
            timestamp={props.data.createdAt}
            title={props.data.title}
        />
    )
}

export const getStaticProps = async (context) => {
    try {
        const slug = context.params?.slug;
        // const { data } = await blogService.getBlogBySlug(slug);
        const data = await getRequest(CONSTANTS.GET_BLOG_BY_SLUG_URL + slug);
        // let data  = await fetch(CONSTANTS.GET_BLOG_BY_SLUG_URL + slug)
        //     .then(data => data.json())
        //     .then(data => data.data);
        let props =  { props: { data } };
        return props;
    } catch (error) {
        console.log(error);
        alert("Error Loading Blog. Internal Server Error!");
        return { props: { hasError: true } };
    }
}

export async function getStaticPaths(context) {
    // const { data } = await blogService.getSlugs();
    const data = await getRequest(CONSTANTS.GET_SLUGS_URL);
    // console.log("Blog slugs : ", data)
    const pathsWithParams = data.map((obj) => ({ params: { slug: obj.slug } }));

    return {
        paths: pathsWithParams,
        fallback: false
    }
}

const getRequest = async (URL) => {
    const options = {
        agent: new https.Agent({
          rejectUnauthorized: false
        })
      };
    let data = await fetch(URL, options)
        .then(data => data.json())
        .then(data => data.data);
    return data;
}

export default Blog 
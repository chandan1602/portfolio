import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import style from './../../styles/blogs.module.css'
import { useRouter } from 'next/router';
import { blogService } from '../../api'
import Item from '../../components/Blog/Item';

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
        const { data } = await blogService.getBlogBySlug(slug);
        let props =  { props: { data } };
        return props;
    } catch (error) {
        console.log(error);
        alert("Error Loading Blog. Internal Server Error!");
        return { props: { hasError: true } };
    }
}

export const getStaticPaths = async () => {
    const { data } = await blogService.getSlugs();
    const pathsWithParams = data.map((obj) => ({ params: { slug: obj.slug } }))

    return {
        paths: pathsWithParams,
        fallback: false
    }
}

export default Blog 
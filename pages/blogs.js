import React from 'react';
import Head from 'next/head';
import { Spinner } from 'react-bootstrap';
import { blogService } from '../api';
import style from './../styles/blogs.module.css';
import { useRouter } from 'next/router';

const Blogs = ({ blogs }) => {
    const router = useRouter();

    const redirectToSlug = (e, slug) => {
        router.push("/blog/" + slug);
    };

    // SEO meta description from first 2 blog titles
    const metaDescription = blogs && blogs.length > 0
        ? `Read the latest blogs: ${blogs.slice(0, 2).map(b => b.title).join(', ')} and more.`
        : 'Read the latest blogs on our site.';

    return (
        <>
            <Head>
                <title>Blogs | Portfolio</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content="Blogs | Portfolio" />
                <meta property="og:description" content={metaDescription} />
            </Head>
            <div>
                <div className={`container ${style.blogs_main}`}>
                    <h2 className="my-4 text-center">Latest Blogs</h2>
                    <div className="row">
                        {blogs && blogs.length > 0 ? blogs.map((item) => (
                            <div className="col-md-4 mb-4" key={item.slug}>
                                <div className="card h-100 shadow-sm" onClick={(e) => redirectToSlug(e, item.slug)} style={{ cursor: 'pointer' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        {item.description && <p className="card-text">{item.description.slice(0, 100)}...</p>}
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="col-12">
                                <div className="alert alert-info text-center">No blogs found.</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps() {
    const { data } = await blogService.getListings();
    return {
        props: {
            blogs: data || []
        }
    };
}

export default Blogs;

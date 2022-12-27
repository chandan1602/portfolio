import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { blogService } from '../api'
import Item from '../components/Blog/Item'
import Listing from '../components/Blog/Listing'
import style from './../styles/blogs.module.css'
import {useRouter} from 'next/router';

const blogs = ({data}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(false);
    }, [])

    const redirectToSlug = (e, slug) => {
        router.push("/blog/" + slug);
    }

    // data.map(item => console.log("IN BLOGS.JS, the blogs :", item)) 
    const changeActiveTab = (type) => {
        if (type == "private") {
            document.getElementById("public").classList.remove("active")
            document.getElementById("publictab").classList.remove("active")
        } else {
            document.getElementById("private").classList.remove("active")
            document.getElementById("privatetab").classList.remove("active")
        }
        document.getElementById(type).classList.add("active")
        document.getElementById(`${type}tab`).classList.add("active")
    }
    if (isLoading) {
        return (
            <div className={style.loading}>
                <Spinner animation="grow" />
            </div>
        )
    } 
    return (
        <div>
            <div className={`container ${style.blogs_main}`}>
                <ul className={`nav nav-tabs`} id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="public"
                            data-bs-toggle="tab" data-bs-target="#home"
                            type="button" role="tab"
                            aria-controls="home" aria-selected="true"
                            onClick={() => changeActiveTab("public")}>Public</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="private"
                            data-bs-toggle="tab" data-bs-target="#profile"
                            type="button" role="tab"
                            aria-controls="profile" aria-selected="false"
                            onClick={() => changeActiveTab("private")}>Private</button>
                    </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="publictab" 
                        role="tabpanel" aria-labelledby="public">
                        <div className={style.bl}>
                            {
                                data.map((item, index) =>
                                        <div key={item.slug} onClick={(e) => redirectToSlug(e, item.slug)}>
                                        <Listing
                                            id={item.slug}
                                            title={item.title}
                                            
                                            />
                                            </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade show" id="privatetab" 
                        role="tabpanel" aria-labelledby="private">
                            <div className={`jumbotron ${style.bl}`}>
                                <p style={{"textAlign": 'center'}}>No Private Blogs Yet.</p>

                            </div>
                        </div>
                </div>
            </div>


        </div>
    )
}

blogs.getInitialProps = async (request) => {
    const {data} = await blogService.getListings();
    // console.log("SERVER DATA : ", data)
    return {data}
} 

export default blogs

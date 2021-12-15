import React from 'react'
import Item from '../components/Blog/Item'
import items from './../components/Blog/items.json'
import style from './../styles/blogs.module.css'
const blogs = () => {
    return (
        <div>
            <div className={`container ${style.blogs_main}`}>
                <ul className={`nav nav-tabs`} id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Public</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Private</button>
                    </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <ul>
                            {
                                items.items.map((item, index) => {
                                    <Item
                                        key={index}
                                        description={item.description}
                                        date={item.date}
                                        comments={item.comments}
                                        timestamp={item.timestamp}
                                    />
                                })
                            }
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                </div>
            </div>


        </div>
    )
}

export default blogs

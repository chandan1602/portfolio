import React, { useState } from 'react'
import style from './../../styles/blogs.module.css'

const Listing = ({ id, title }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className={style.listingBox} key={id}>
            <p>{title}</p>
        </div>
    )
}

export default Listing

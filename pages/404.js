import React from 'react'
import style from './../styles/404.module.css'
import { useRouter } from "next/router";
const Error = () => {
    const router = useRouter()
    return (
        <div className={style.Error_main}> 
            <h1>
                Error 404
            </h1>
            <h2>
                Page not found!
            </h2>
            <a>
                <p onClick={() => router.push('/')} style={{cursor: 'pointer'}}>Return to Home Page</p>
            </a>
            
        </div>
    )
}

export default Error

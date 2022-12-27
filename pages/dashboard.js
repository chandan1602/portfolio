import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { Form, Button, FormGroup, FormControl, FormLabel, Spinner, Alert } from 'react-bootstrap'
import styles from './../styles/dash.module.css'
import { authService } from '../api'
import { useRouter, withRouter } from 'next/router'
import LocalStorageKeys from '../util/constants/LocalStorageKeys'

const Dashboard = () => {
    const router = useRouter();
    const [token, setToken] = useState("");
    const [pageLoaded, setPageLoaded] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(async () => {
        setPageLoaded(false);
        return <div></div>;
    }, [])

    useEffect(async () => {
        if(pageLoaded===false) {
            const {error} = await authService.validate(localStorage.getItem(LocalStorageKeys.JSON_WEB_TOKEN));
            if(error) {
                alert("You must be logged in");
                router.push("/signin");
                return;
            }
            setToken(router.query.token);
            setIsLoading(false)
            setPageLoaded(true)
        }
        
    }, [pageLoaded])


    if (isLoading) return (
        <div className={styles.loading}>
            <Spinner animation="grow" />
        </div>
    )

    const handleCreateNote = () => {
        router.push("/notes")
    }

    const handleCreateBlog = () => {
        router.push({
            pathname: "/newb"
        })
    }

    return (
        <div className="container">
            <br /><br />
            <div className="row">
                <div className="col-lg-6">
                    <div className="jumbotron">
                        <h1 className="display-6">Create Blog</h1>
                        <p className="lead">Wohoo! Time for a new Blog!</p>
                        <hr className="my-4" />
                        <p>Time to be productive Chandan</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" style={{"color" : "white"}} onClick={handleCreateBlog} role="button">Blog Now</a>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="jumbotron">
                        <h1 className="display-6">Create Note</h1>
                        <p className="lead">Wohoo! Lets create a Note.</p>
                        <hr className="my-4" />
                        <p>Note in our own personal space. Beats all!!</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" style={{"color" : "white"}} onClick={handleCreateNote} role="button">Write a Note</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Dashboard)
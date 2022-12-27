import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { Form, Button, FormGroup, FormControl, FormLabel, Spinner, Alert } from 'react-bootstrap'
import styles from './../styles/dash.module.css'
import { authService, blogService } from '../api'
import { useRouter, withRouter } from 'next/router'
import RichTextEditor from '../components/RichTextEditor/Editor'
import { EditorState } from 'draft-js';
import { convertToHTML } from 'draft-convert'
import LocalStorageKeys from '../util/constants/LocalStorageKeys'
import { Header } from '../components/Header'

const NewB = () => {
    const router = useRouter();
    const [token, setToken] = useState("");
    const [pageLoaded, setPageLoaded] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState("");

    const onSubmit = async (e) => {
        if (title !== "") {
            let res = prompt("Proceed with the Blog? (yes/y)");
            if (res === "yes" || res === "y") {
                try {
                    setIsLoading(true);
                    const { error } = await blogService
                        .postBlog({ 
                            description: localStorage.getItem(LocalStorageKeys.BLOG), 
                            title, 
                            token });
                    if (error) {
                        alert("Error! User auth failure.")
                    }
                    setIsLoading(false);
                    console.log("Now is Loading is " + isLoading);
                } catch (error) {
                    alert("Request Failed. Probable Reason : Network Problem!");
                    setIsLoading(false);
                }
            }
        }
    }

    useEffect(async () => {
        setPageLoaded(false);
        return <div></div>;
    }, []);

    useEffect(async () => {
        if (pageLoaded === false) {
            const { error } = await authService.validate(localStorage.getItem(LocalStorageKeys.JSON_WEB_TOKEN));
            if (error) {
                alert("You must be logged in");
                router.push("/signin");
                return;
            }
            setToken(localStorage.getItem(LocalStorageKeys.JSON_WEB_TOKEN));
            setIsLoading(false)
            setPageLoaded(true)
        }

    }, [pageLoaded])

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }


    if (isLoading) {
        return (
            <div className={styles.loading}>
                <Spinner animation="grow" />
            </div>
        )
    } else return (
        <div className="container">
            <br />
            <Header title="Create Blog" />
            <Form onSubmit={(e) => onSubmit(e)}>
                <FormGroup controlId="formBasicTitle">
                    <FormControl
                        placeholder="Title"
                        onChange={e => titleHandler(e)}
                        value={title}
                    />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </FormGroup>

                <RichTextEditor />
                <br />
                <Button
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>

            {typeof localStorage !== "undefined" && localStorage.getItem(LocalStorageKeys.BLOG) && localStorage.getItem(LocalStorageKeys.BLOG) !== "<p></p>" &&
                <div className='container'>
                    <hr />
                    <div className='jumbotron'>
                        <h4>Previous Blog detected</h4>
                        <p dangerouslySetInnerHTML={{ __html: localStorage.getItem(LocalStorageKeys.BLOG) }}></p>
                    </div>
                </div>
            }
        </div>
    )
}

export default NewB;
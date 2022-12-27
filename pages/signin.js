import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { Form, Button, FormGroup, FormControl, FormLabel, Spinner, Alert } from 'react-bootstrap'
import styles from './../styles/formContainer.module.css'
import TextButton from './../components/TextButton/button'
import { authService } from '../api'
import { useRouter } from 'next/router'
import LocalStorageKeys from '../util/constants/LocalStorageKeys'

const Login = () => {
    const router = useRouter();
    // const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const emailHandler = e => {
        setEmail(e.target.value);
    }

    const passwordHandler = e => {
        setPassword(e.target.value);
    }

    const onSubmit = async (event) => {
        try {
            event.preventDefault();
            if(email==="" || password==="") {
                alert("Missing Fields");
                return;
            }
            setIsLoading(true);
            localStorage.setItem(LocalStorageKeys.EMAIL, email);
            let { data, error } = await authService.login({ name: email, password });
            setIsLoading(false);
            if(error) {
                alert("Invalid Email or Password");
                setIsLoading(false);
                return;
            }
            localStorage.setItem(LocalStorageKeys.JSON_WEB_TOKEN, data);
            router.push({
                pathname: "/dashboard"
            })
        } catch (error) {
            alert(error)
            console.error(error);
            setIsLoading(false);
        }
    }


    if (isLoading) return (
        <div className={styles.loading}>
            <Spinner animation="grow" />
        </div>
    )
    return (
        <div className={styles.MainContainer}>
            <h2>
                Authenticate
            </h2><br />
            <Form onSubmit={(e) => onSubmit(e)}>
                <FormGroup controlId="formBasicEmail">
                    <FormControl
                        placeholder="Enter email"
                        onChange={e => emailHandler(e)}
                        value={email}
                    />
                    <Form.Text className="text-muted">
                        
                    </Form.Text>
                </FormGroup>

                <FormGroup controlId="formBasicPassword">
                    <FormControl
                        type="password"
                        placeholder="Password"
                        onChange={e => passwordHandler(e)}
                        value={password}
                    />
                </FormGroup>
                <Button
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
            <div><p></p></div>
            <div className="buttonGroups">
                <TextButton path={"/forgot-password"} Name={'RESET PASSWORD'} />
            </div>
        </div>
    )
}

export default Login
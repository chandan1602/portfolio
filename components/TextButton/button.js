import React from 'react';
import {Link} from 'react-router-dom';
import styles from './../../styles/TextButton.module.css'

const TextButton = (props) => {
    return(
    <div className={styles.main}>
            <a href={props.path} className={styles.text}>
            <p>{props.Name}</p>
        </a>
    </div>
    )
}

export default TextButton
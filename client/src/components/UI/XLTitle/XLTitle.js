import React from 'react'
import styles from './XLTitle.module.css'

const XLTitle = ({text}) => {

    return (
        <div className={styles.container}>
            <p className={styles.title}>{text}</p>
        </div>
    )
};

export default XLTitle;
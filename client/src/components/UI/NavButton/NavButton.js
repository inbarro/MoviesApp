import React from 'react'
import styles from './NavButton.module.css'
import arrowForward from '../../../assets/images/arrowForward.svg';
import arrowBack  from '../../../assets/images/arrowBack.svg';

const NavButton = ({text, isBack}) => {

    return (
        <div className={styles.container}>
            { isBack && <img className={styles.arrow} src={arrowBack} alt={''}/> }
            <p className={styles.text}>{text}</p>
            { !isBack && <img className={styles.arrow} src={arrowForward} alt={''}/> }

        </div>
    )
};

export default NavButton;
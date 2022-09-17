import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';
// import {userImg} from '../../containers/dashboard/imports';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    
    return (
        <div className={styles.headcontainer}>
            <div className={styles.headwrapper}>
                <div className={styles.title}>
                    <h2>Hello, <span>{props.user.given_name}!</span></h2>
                    welcome to your workspace
                </div>
            </div>
            {/* <div className={styles.profile}>
                <Image alt='profile image' src={userImg} className={styles.image} />
            </div> */}
            <FontAwesomeIcon className={styles.image} icon={faUserCircle} style={{width: "2rem", height: '2rem', cursor: "pointer"}} />

        </div>
    );
}

export default Header;
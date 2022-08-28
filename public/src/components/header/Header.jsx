import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import {userImg} from '../../containers/dashboard/imports';

function Header(props) {
    
    return (
        <div className={styles.headcontainer}>
            <div className={styles.headwrapper}>
                <div className={styles.title}>
                    <h2>Hello, <span>{props.user.given_name}!</span></h2>
                    welcome to your workspace
                </div>
            </div>
            <div className={styles.profile}>
                <Image alt='profile image' src={userImg} className={styles.image} />
            </div>

        </div>
    );
}

export default Header;
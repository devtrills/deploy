import React from 'react';
import styles from './leftNavbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookOpen, faCog, faHeart, faRightToBracket, faRocket, faTachometer} from '@fortawesome/free-solid-svg-icons';
import { Router } from 'next/router';

function leftnavbar() {
    return(
        <div className={styles.navcontainer}>
            <div className={styles.logo} onClick={Router.push('/home')}>
                <h2>Investrill</h2>
            </div>
            <div className={styles.wrapper}>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faTachometer} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faRocket} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#">Explore</a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faBookOpen} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#">Library</a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faHeart} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#" onClick={console.log('clicked fav')}>Favorite</a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCog} style={{width: "18px", cursor: "pointer"}} />
                        <a href="/api/auth/logout">Settings</a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faRightToBracket} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default leftnavbar;
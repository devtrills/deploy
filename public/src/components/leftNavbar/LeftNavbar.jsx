import React, { useState, useEffect } from 'react';
import styles from './leftNavbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookOpen, faCog, faHeart, faRightToBracket, faRocket, faTachometer} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

function leftnavbar() {
    
  const [toggleMenu, setToggleMenu] = useState(false);

    const router = useRouter();
    return(
        <div className={toggleMenu ? styles.closeContainer : styles.navcontainer} >
            <div>
            {toggleMenu
          ? <RiCloseLine style={{background: '#fff', boxShadow: '3px 0px 6px 0px rgba(133, 133, 133, 0.75)', borderRadius: '50%', visibility: 'visible',position: 'absolute', marginLeft: 'calc(200px + .4rem)', marginTop: '.6rem'}} color="#000" size={40} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line  color="#000" size={40} onClick={() => setToggleMenu(true)} />}
            <div className={styles.logo} onClick={() => router.push('/home')}>
                <h2>Investrill</h2>
            </div>
            </div>

            <div className={styles.wrapper}>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faTachometer} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faRocket} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#">Investments</a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faBookOpen} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#">Withdraw</a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faHeart} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#" onClick={() => console.log('clicked fav')}>Deposit</a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCog} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#">Transactions</a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faRightToBracket} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#">Referrals</a>
                    </li>
                    {/*  */}
                    <li>
                        <FontAwesomeIcon icon={faTachometer} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#">Calculator</a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faRightToBracket} style={{width: "18px", cursor: "pointer"}} />
                        <a href="/api/auth/logout">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default leftnavbar;
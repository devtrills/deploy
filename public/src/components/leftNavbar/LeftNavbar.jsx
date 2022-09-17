import React, { useState, useEffect } from 'react';
import styles from './leftNavbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookOpen, faCog, faPeopleArrows, faRightToBracket, faMoneyBillTransfer, faTachometer, faHandHoldingDollar} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

function leftnavbar(props) {
    
  const [toggleMenu, setToggleMenu] = useState(false);

    const router = useRouter();
    return(
        <div className={toggleMenu ? styles.closeContainer : styles.navcontainer} >
            <div className={toggleMenu? styles.overlay  : styles.closeOverlay} onClick={() => setToggleMenu(false)} ></div>
            <div>
            {toggleMenu
          ? <RiCloseLine 
                style={{
                    background: '#fff', 
                    cursor: 'pointer',
                    padding: '.5rem',
                    boxShadow: '3px 0px 6px 0px rgba(133, 133, 133, 0.75)', 
                    borderRadius: '50%', 
                    visibility: 'visible',
                    position: 'absolute', 
                    marginLeft: 'calc(200px + .4rem)', 
                    marginTop: '.6rem'}} 
                color="#000" size={40} 
                onClick={() => setToggleMenu(false)} 
                />
          : <RiMenu3Line 
                style={{
                    background: '#fff', 
                    cursor: 'pointer',
                    padding: '.5rem',
                    boxShadow: '3px 0px 6px 0px rgba(133, 133, 133, 0.75)', 
                    borderRadius: '50%'}}
                color="#000" 
                size={40} 
                onClick={() => setToggleMenu(true)} 
                />}
            <div className={styles.logo} onClick={() => router.push('/home')}>
                <h2>Investrill</h2>
            </div>
            </div>

            <div className={styles.wrapper}>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faTachometer} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#dashboard" onClick={() => {props.changeContent('dashboard'); setToggleMenu(false)}}>Dashboard</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faHandHoldingDollar} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#investment" onClick={() => {props.changeContent('investments'); setToggleMenu(false)}}>Investments</a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faMoneyBillTransfer} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#withdraw" onClick={() => {props.changeContent('withdraw'); setToggleMenu(false)}}>Withdraw</a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faBookOpen} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#transactions" onClick={() => {props.changeContent('transactions'); setToggleMenu(false)}}>Transactions</a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faPeopleArrows} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#refferals" onClick={() => {props.changeContent('referrals'); setToggleMenu(false)}}>Referrals</a>
                    </li>
                    {/* 
                                            <li>
                        <FontAwesomeIcon icon={faTachometer} style={{width: "18px", cursor: "pointer"}} />
                        <a href="#calculator" onClick={() => {props.changeContent('calculator'); setToggleMenu(false)}}>Calculator</a>
                    </li>
                     */}
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
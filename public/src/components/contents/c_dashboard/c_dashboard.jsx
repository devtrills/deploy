import React from 'react';
import styles from './c_dashboard.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClone, faLink } from '@fortawesome/free-solid-svg-icons';

function dashboard(props) {

    return(
        <div className={styles.contentcontainer}>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h4 className={styles.card_header}>Deposit Wallet Balance</h4>
                    <p className={styles.card_content}>$0</p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.card_header}>Interest Wallet Balance</h4>
                    <p className={styles.card_content}>$0</p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.card_header}>Total deposit</h4>
                    <p className={styles.card_content}>$0</p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.card_header}>Total Investment</h4>
                    <p className={styles.card_content}>$0</p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.card_header}>Total Withdraw</h4>
                    <p className={styles.card_content}>$0</p>
                </div>
            </div>

            <div className={styles.card_account}>
                <h4 className={styles.card_header}>Balance in Account</h4>
                <p className={styles.card_content}>$0.00</p>
                <div style={{height: '.2rem', marginTop: '1rem',backgroundColor: '#f2f2f2', borderRadius: '.2rem'}}></div>

                <div style={{display: 'flex', marginTop: '1rem', justifyContent: 'space-between'}}>
                    <h4 className={styles.card_header}>Available Funds</h4>
                    <p>$0.00</p>
                </div>
                <div style={{display: 'flex', marginTop: '1rem', justifyContent: 'space-between'}}>
                    <h4 className={styles.card_header}>Intrest Wallet</h4>
                    <p>$0.00</p>
                </div>
                <div style={{height: '.05rem', marginTop: '1rem',backgroundColor: '#8094aa'}}></div>

                <div style={{display: 'flex', marginTop: '1rem', justifyContent: 'space-between'}}>
                    <h4 className={styles.card_header}>Total</h4>
                    <p>$0.00</p>
                </div>

                <div style={{textAlign: 'center', marginTop: '1rem'}} >
                    <button className={styles.planButton}>Withdraw Funds</button>
                    <div className={styles.planButton2}>Deposit Funds</div>
                </div>
            </div>

            <div className={styles.cards_refer}>
                <div className={styles.card_refer}>
                    <h3 >Refer Us and earn</h3>
                    <p style={{color: '#8094aa'}}>Use the bellow link to invite your friends</p>
                    <div className={styles.referBtn}>
                        <p style={{width: '7%'}}>
                            <FontAwesomeIcon icon={faLink} style={{width: "18px", cursor: "pointer"}} />
                        </p>
                        <p className={styles.link} style={{width: '70%'}}>https://investrill.com/register/miller</p>
                        <p className={styles.copyLink}>
                            <FontAwesomeIcon icon={faClone} style={{width: "18px", cursor: "pointer"}}/>Copy Link
                        </p>
                    </div>
                </div>
                
                <div className={styles.refer_divider}></div>
                <div className={styles.card_refer}>
                    <h3>My Referrals</h3>
                    <div style={{display: 'flex', marginTop: '1rem'}}>
                        <div style={{width: '50%'}}>
                            <p>0</p>
                            <h4 className={styles.card_header}>Total Joined</h4>
                        </div>
                        <div style={{width: '50%'}}>
                            <p>$0.00</p>
                            <h4 className={styles.card_header}>Referral Earn</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.card_trans}>
                <div className={styles.card_trans_header}>
                    <p>Date</p><p>Transaction ID</p><p>Amount</p><p>Wallet</p><p>Post Balance</p>
                </div>
                <div style={{height: '.05rem', marginTop: '1rem',backgroundColor: '#8094aa'}}></div>
                
            </div>
        </div>
    );
}

export default dashboard;
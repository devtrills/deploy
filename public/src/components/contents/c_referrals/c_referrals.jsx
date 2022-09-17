import React from 'react';
import styles from './c_referrals.module.css';

function Contents(props) {

    /*make a scrollable bar for contents, make overflowX: hidden */
    return(
        <div className={styles.contentcontainer}>
            <div className={styles.header}>
                <h2>My referred Users</h2>
                <p>List of all referred Users</p>
            </div>
            <div className={styles.card_trans2}>
                <div className={styles.card_trans_header}>
                    <p>SL</p><p>Full Name</p><p>Joined at</p>
                </div>
                <div style={{height: '.05rem', marginTop: '1rem',backgroundColor: '#8094aa'}}></div>
                {/*  */}
            </div>
            <div className={styles.header}>
                <h2>Deposit Referral Commissions</h2>
                <p>List of all Deposit Referral Commissions</p>
            </div>
            <div className={styles.card_trans}>
                <div className={styles.card_trans_header}>
                    <p>Date</p><p>From</p><p>Level</p><p>Percent</p><p>Amount</p><p>Type</p>
                </div>
                <div style={{height: '.05rem', marginTop: '1rem',backgroundColor: '#8094aa'}}></div>
                {/*  */}
            </div>
        </div>
    );
}

export default Contents;
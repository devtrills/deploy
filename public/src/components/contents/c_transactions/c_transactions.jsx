import React from 'react';
import styles from './c_transactions.module.css';

function Contents(props) {

    /*make a scrollable bar for contents, make overflowX: hidden */
    return(
        <div className={styles.contentcontainer}>
            <div className={styles.header}>
                <h2>Wallet Transactions</h2>
                <p>All your Wallet Transactions</p>
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

export default Contents;
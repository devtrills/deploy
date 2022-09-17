import React from 'react';
import styles from './c_investments.module.css';

function Contents(props) {

    /*make a scrollable bar for contents, make overflowX: hidden */
    return(
        <div className={styles.contentcontainer}>
            <div className={styles.header}>
                <h2>Investment Plans</h2>
                <p>Choose your investment plan and start Earning</p>
            </div>
            <div className={styles.plans}>
                <div className={styles.plan}>
                    <div className={styles.planTop}>
                        <h2>basic</h2>
                        <div className={styles.months}>
                            <p className={styles.intrest}>12%</p>
                            <p className={styles.time}>Every Month</p>
                        </div>
                    </div>
                    <div className={styles.planBottom}>
                        <div><p>min deposit</p><p>$1,000</p></div>
                        <div><p>max deposit</p><p>$10,000</p></div>
                        <div><p>capital return</p><p>no</p></div>
                        <div><p>total return</p><p>12%</p></div>
                        <button className={styles.planButton}>choose this plan</button>
                    </div>
                </div>
                <div className={styles.plan}>
                    <div className={styles.planTop}>
                        <h2>regular</h2>
                        <div className={styles.months}>
                            <p className={styles.intrest}>15%</p>
                            <p className={styles.time}>Every Month</p>
                        </div>
                    </div>
                    <div className={styles.planBottom}>
                        <div><p>min deposit</p><p>$10,100</p></div>
                        <div><p>max deposit</p><p>$100,000</p></div>
                        <div><p>capital return</p><p>no</p></div>
                        <div><p>total return</p><p>15%</p></div>
                        <button className={styles.planButton}>choose this plan</button>
                    </div>
                </div>
                <div className={styles.plan}>
                    <div className={styles.planTop}>
                        <h2>intermediate</h2>
                        <div className={styles.months}>
                            <p className={styles.intrest}>18%</p>
                            <p className={styles.time}>Every Month</p>
                        </div>
                    </div>
                    <div className={styles.planBottom}>
                        <div><p>min deposit</p><p>$100,100</p></div>
                        <div><p>max deposit</p><p>$1,000,000</p></div>
                        <div><p>capital return</p><p>no</p></div>
                        <div><p>total return</p><p>18%</p></div>
                        <button className={styles.planButton}>choose this plan</button>
                    </div>
                </div>
                <div className={styles.plan}>
                    <div className={styles.planTop}>
                        <h2>exclusive</h2>
                        <div className={styles.months}>
                            <p className={styles.intrest}>21%</p>
                            <p className={styles.time}>Every Month</p>
                        </div>
                    </div>
                    <div className={styles.planBottom}>
                        <div><p>min deposit</p><p>$1,000,100</p></div>
                        <div><p>max deposit</p><p>$1,000,000,000</p></div>
                        <div><p>capital return</p><p>no</p></div>
                        <div><p>total return</p><p>21%</p></div>
                        <button className={styles.planButton}>choose this plan</button>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default Contents;
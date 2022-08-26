import React from 'react';
import styles from './footer.module.css';

function Header() {
    return (
        <div className={styles.footercontainer}>
            <div className={styles.footerwrapper}>
                <div className={styles.title}>
                    <h2>Hello, <span>Siti!</span></h2>
                </div>
            </div>
        </div>
    );
}

export default Header;
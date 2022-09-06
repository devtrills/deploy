import React from 'react';
import styles from './content.module.css';

function Contents(props) {

    /*make a scrollable bar for contents, make overflowX: hidden */
    return(
        <div className={styles.contentcontainer}>
            {props.children}
        </div>
    );
}

export default Contents;
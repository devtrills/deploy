import React from 'react';
import styles from './modal.module.css';

function modal(props) {

    return(
        <div className={styles.contentcontainer}>
            {props.children}
        </div>
    );
}

export default modal;
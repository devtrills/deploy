import React, {useState} from 'react';
import Head from 'next/head';
import styles from './dashboard.module.css';
import { DashContent, DashHeader, DashLeftNavbar } from '../../components';
import {C_dashboard, C_investments } from '../../components/contents';

export default function Dashboard(props) {
    const state = useState();
    const [content, setContent ] = useState('dashboard');

    const changeContent = (content) => {
        setContent(content);
    }
    const showContent = () => {
        switch(content){
            case 'dashboard':
                return <C_dashboard />;
            case 'investments':
                return <C_investments />
            default:
                return <C_dashboard />
        }
    }
    console.log(state);
    return (
        <div className={styles.body}>
            <Head>
                <title>Manage your funds: Investrill Custormers dashboard</title>
                <meta name="description" content="Created by Discrete" />
                <link rel="icon" href='../../pro.ico' />
            </Head>
            <DashLeftNavbar changeContent={changeContent} />
            <DashHeader user={props.user} />
            <DashContent>{showContent()}</DashContent>
            <div className={styles.overlay}></div>
        </div>
    );
}
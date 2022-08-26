import Head from 'next/head';
import styles from './dashboard.module.css';
import { DashContent, DashFooter, DashHeader, DashLeftNavbar } from '../../components';

export default function Home() {
    return (
        <div className={styles.body}>
            <Head>
                <title>Manage your funds: Investrill Custormers dashboard</title>
                <meta name="description" content="Created by Discrete" />
                <link rel="icon" href='../../pro.ico' />
            </Head>
            <DashFooter />
            <DashLeftNavbar />
            <DashHeader />
            <DashContent />
        </div>
    );
}
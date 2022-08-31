import Head from 'next/head';
import styles from './dashboard.module.css';
import { DashContent, DashHeader, DashLeftNavbar } from '../../components';

export default function Dashboard(props) {
    return (
        <div className={styles.body}>
            <Head>
                <title>Manage your funds: Investrill Custormers dashboard</title>
                <meta name="description" content="Created by Discrete" />
                <link rel="icon" href='../../pro.ico' />
            </Head>
            <DashLeftNavbar />
            <DashHeader user={props.user} />
            <DashContent />
        </div>
    );
}
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Settings: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Settings page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>Welcome to User Settings</h1>
      </section>
    </div>
  );
};


export default Settings;

import Head from 'next/head';
import CatCard from '../components/cards/cat/CatCard';
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks';
import HeaderLayout from '../components/layouts/Header/HeaderLayout';
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
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
        <CatCard {...mockCatCardProps.base} />
      </section>
    </div>
  );
};

Settings.getLayout = (page) => {
  return (
    <>
      <HeaderLayout />
      {page}
    </>
  );
};

export default Settings;

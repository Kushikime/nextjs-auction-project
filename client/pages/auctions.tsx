import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Auctions: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Auctions page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>Welcome to User Auctions</h1>
      </section>
    </div>
  );
};

Auctions.getLayout = (page) => {
  return (
    <>
      {page}
    </>
  );
};

export default Auctions;

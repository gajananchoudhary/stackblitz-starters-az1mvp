import Head from 'next/head';
import React from 'react';
import Layout from '../src/components/Layout';
import './../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
        <link
          href="https://fonts.googleapis.com/css?family=Karla"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>dialog</title>
      </Head>
      <div>
        <p>
          ⚡ dialog ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
      </div>
      <div>
        <p>Look!</p>
        <p>create-window.ts</p>
        <p>win.on('close', onClose);</p>
      </div>
    </React.Fragment>
  );
};

export default Home;

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReadFrame from '../components/ReadFrame';
import OutputFrame from '../components/OutputFrame';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>skeleton</title>
      </Head>
      <div>
        <p>
          ⚡ skeleton ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <div id="pos-left">
          <ReadFrame />
        </div>
        <div id="pos-right">
          <OutputFrame />
        </div>
      </div>
      <style jsx>
        {`
          #pos-left {
            float: left;
          }
          #pos-right {
            float: left;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Home;

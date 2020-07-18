import React, { useState, useEffect, createContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FrameA1 from '../components/FrameA1';
import FrameB from '../components/FrameB';

export const input1Context = createContext(null);

const Home = () => {
  const [input1, setInput1] = useState<string>();

  useEffect(() => {
    setInput1('初期値');
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>n2-03</title>
      </Head>
      <div>
        <p>
          ⚡ createContext() / useContext() ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        値は、{input1} です。
      </div>
      <div id="frame-a-left">
        <input1Context.Provider value={[input1, setInput1]}>
          <FrameA1 />
        </input1Context.Provider>
      </div>
      <div id="frame-b-right">
        <input1Context.Provider value={input1}>
          <FrameB />
        </input1Context.Provider>
      </div>
      <style jsx>
        {`
          #frame-a-left {
            float: left;
          }
          #frame-b-right {
            float: left;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Home;

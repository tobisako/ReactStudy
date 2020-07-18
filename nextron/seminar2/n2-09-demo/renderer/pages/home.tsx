import React, { useState, createContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReadFrame from '../components/ReadFrame';
import OutputFrame from '../components/OutputFrame';

export const DropFilePathContext = createContext(null);
export const EditContext = createContext(null);

const Home = () => {
  const [dropfilepath, setDropFilePath] = useState<string>();
  const [editdata, setEditData] = useState<string>();

  return (
    <React.Fragment>
      <Head>
        <title>demo</title>
      </Head>
      <div>
        <p>
          ⚡ demo1 ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <div id="pos-left">
          <EditContext.Provider value={setEditData}>
            <DropFilePathContext.Provider value={[dropfilepath, setDropFilePath]}>
              <ReadFrame />
            </DropFilePathContext.Provider>
          </EditContext.Provider>
        </div>
        <div id="pos-right">
          <EditContext.Provider value={[editdata, setEditData]}>
            <OutputFrame />
          </EditContext.Provider>
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

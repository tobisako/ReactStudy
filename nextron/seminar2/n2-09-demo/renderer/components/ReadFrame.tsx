import React from 'react';
import DropArea from './DropArea';
import ViewParts from './ViewParts';

const ReadFrame = () => (
  <React.Fragment>
    <div id="read-frame">
      <DropArea />
      <ViewParts />
    </div>
    <style jsx>
      {`
        #read-frame {
          border: 1px solid #000000;
          width: 420px;
          margin: 10px;
          padding: 10px;
        }
      `}
    </style>
  </React.Fragment>
);

export default ReadFrame;

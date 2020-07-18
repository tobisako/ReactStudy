import React from 'react';
import InputParts from '../components/InputParts';

const FrameA2 = () => (
  <React.Fragment>
    <div>
      <h3>FrameA2.tsx</h3>
      <InputParts />
    </div>
    <style jsx>
      {`
        div {
          border: 1px solid #000000;
          margin: 10px;
          padding: 10px;
        }
      `}
    </style>
  </React.Fragment>
);

export default FrameA2;

import React from "react";
import FrameA2 from "../components/FrameA2";

const FrameA1 = () => (
  <React.Fragment>
    <div>
      <h3>FrameA1.tsx</h3>
      <FrameA2 />
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

export default FrameA1;

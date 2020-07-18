import React from "react";
import ViewParts from "../components/ViewParts";
import { input1Context } from "../pages/home";

const FrameB = () => (
  <React.Fragment>
    <div>
      <h3>FrameB.tsx</h3>
      <ViewParts />
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
<div>ドラッグ エリア</div>;

export default FrameB;

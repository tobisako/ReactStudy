import React, { useContext } from "react";
import { input1Context } from "../pages/home";

const ViewParts = () => {
  const input1 = useContext(input1Context);

  return (
    <React.Fragment>
      <div>
        <h3>ViewParts.tsx</h3>
        <p>INPUT1の中身は、</p>
        <div>{input1}</div>
        です。
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
};

export default ViewParts;

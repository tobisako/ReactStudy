import React, { useContext } from 'react';
import { input1Context } from '../pages/home';

//type Input1ContextType = [string, any];

const InputParts = () => {
  const [input1, setInput1] = useContext(input1Context);

  const onWriteInput1 = () => {
    const element = document.getElementById('textarea-input1') as HTMLInputElement;
    setInput1(element.value);
  };

  return (
    <React.Fragment>
      <div>
        <h3>InputParts.tsx</h3>
        <p>INPUT1</p>
        <textarea id="textarea-input1" />
        <p>
          <button onClick={onWriteInput1}>ステートに書き込む。</button>
        </p>
        値は、{input1} です。
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

export default InputParts;

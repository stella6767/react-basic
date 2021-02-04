//글쓰기, 글삭제, 글목록보기

import { useState } from 'react';
import Top from './components/Top';
import Bottom from './components/Bottom';

function App() {
  //상태
  const [number, setNumber] = useState(1);

  const add = () => {
    setNumber(number + 1);
  };

  const minus = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <Top number={number} />
      <Bottom add={add} minus={minus} />
    </div>
  );
}

export default App;

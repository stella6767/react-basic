import React from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { decrease, increase } from '../store';

const Bottom = () => {
  const dispathcer = useDispatch();

  //인자 넘겨주기
  return (
    <div className="sub_container">
      <h1>Bottom</h1>
      <button onClick={() => dispathcer(increase('cos'))}>증가</button>
      <button onClick={() => dispathcer(decrease())}>감소</button>
    </div>
  );
};

export default Bottom;

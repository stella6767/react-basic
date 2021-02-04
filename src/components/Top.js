import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const Top = () => {
  //const number= useSelector((store) => store.number); //구독 1단계

  //구조분할
  const { number, username } = useSelector((store) => store);
  return (
    <div className="sub_container">
      <h1>Top</h1>
      {/* 구독2단계 완료 */}
      번호: {number}
      이름: {username}
    </div>
  );
};

export default Top;

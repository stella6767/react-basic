//글쓰기, 글삭제, 글목록보기
import React, { useState } from 'react';
import './App.css';
import Bottom from './components/Bottom';
import Top from './components/Top';

function App() {
  return (
    <div className="container">
      <h1>최상단 화면</h1>
      <Top />
      <Bottom />
    </div>
  );
}

export default App;

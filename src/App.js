//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Sub from './Sub';

//0. React엔진 - 데이터변경감지해서 UI 그려주는!!
//1. 실행과정(index.html) - SPA(페이지가 1)
//2. JSX 문법
//3. 바벨(자바스크립트 ES5) -> ES6

//(1) return 시에 하나의 Dom만 리턴할 수 있다.
//(2) 변수 선언은 let이나 const로만 선언
//(3) if 사용불가능 -> 삼항연산자 가능(조건? 값(true일때): 값(false))
//(4) 조건부 랜더링(조건 && 값(true일때만))
//(5) css디자인
// - 내부에 적는 방법(변수로 추천안함)
// - 외부 파일에 적는 방법(className)
// - 라이브러리 사용(부트스트랩, componet-styled) - 추천함
// (6) 닫는 태그 꼭 있어야 함. <hr/>

let a = 10; //변수
const b = 20; //상수

const mystyle = {
  color: 'red',
};

function App() {
  // 다운로드 받음
  console.log('?');
  const [users, setUsers] = useState([
    //래퍼런스 변경되야 동작!!! 깊은복사가 필요
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '코스' },
  ]);

  const download = () => {
    let sample = [
      { id: 1, name: '홍길동' },
      { id: 2, name: '임꺽정' },
      { id: 3, name: '장보고' },
      { id: 4, name: '코스' },
    ];
    setUsers([...sample]);
  };

  //랜더링 시점 = 상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id}, {u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;

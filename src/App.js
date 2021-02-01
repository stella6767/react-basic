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
  let list = [1, 2, 3];
  //let number = 1; //상태변수라면 UI가 자동으로 변경됨, 상태값 아님
  const [number, setNumber] = useState(2); //React안에 hookes 라이브러리 상태값이 됨.
  const add = () => {
    //number++;
    setNumber(number + 1); //리액트한테 number 값 변경할께라고 요청
    console.log('add', number);
  };

  //랜더링 시점 = 상태값 변경
  return (
    <div>
      <h1>숫자:{number}</h1>
      <button onClick={add}>더하기</button>
      <Sub />
    </div>
  );
}

export default App;

import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

// Function 방식
// class 방식
const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`; //디자인 동적결정

//스타일 확장
const StyledAddButton = styled(StyledDeleteButton)`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
  background-color: green;
`; //디자인 동적결정

//부모로부터 받아온 어떤 데이터를 가지고 동적으로 스타일링을 할 거라면.
const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, number, setNumber, user } = props;
  //19번 라인에서 위의 styled-component에게 props를 전달해준다.
  return (
    <div>
      <h1>홈 : {number}</h1>
      <Button variant="primary">Primary</Button>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;

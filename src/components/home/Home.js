import React from 'react';
import styled from 'styled-components';

// Function 방식
// class 방식

//부모로부터 받아온 어떤 데이터를 가지고 동적으로 스타일링을 할 거라면.
const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, number, setNumber, user } = props;

  const StyledDeleteButton = styled.button`
    color: ${(props) => (props.v.username === 'ssar' ? 'blue' : 'red')};
  `; //이거는 어쩔 수 없이 내부에 선언 props를 쓰기 위해서, 디자인 동적결정

  return (
    <div>
      <h1>홈 : {number}</h1>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>
      <StyledDeleteButton v={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;

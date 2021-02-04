import React from 'react';
import styled from 'styled-components';

const StyledBoxDiv = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 20px;
  align-items: center;
`;

const StyledComponent = () => {
  return <div></div>;
};

export default StyledComponent; //이거는 const StyledComponent 만 외부로 보내준다.
export { StyledBoxDiv }; //따로따로, 계속 추가를 시켜줘야 한다.

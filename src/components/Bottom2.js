import React from 'react';
import { StyledBoxDiv } from './StyledComponent';

const Bottom2 = (props) => {
  const { add, minus } = props;

  return (
    <StyledBoxDiv>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </StyledBoxDiv>
  );
};

export default Bottom2;

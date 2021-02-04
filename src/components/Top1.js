import React from 'react';
import { StyledBoxDiv } from './StyledComponent';
import Top2 from './Top2';

const Top1 = (props) => {
  const { number } = props;
  return (
    <StyledBoxDiv>
      <Top2 number={number} />
    </StyledBoxDiv>
  );
};

export default Top1;

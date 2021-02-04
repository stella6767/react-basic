import React from 'react';
import { StyledBoxDiv } from './StyledComponent';
import Top1 from './Top1';

const Top = (props) => {
  const { number } = props;

  return (
    <StyledBoxDiv>
      <Top1 number={number} />
    </StyledBoxDiv>
  );
};

export default Top;

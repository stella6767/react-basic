import React from 'react';
import { StyledBoxDiv } from './StyledComponent';

const Top2 = (props) => {
  const { number } = props;
  return <StyledBoxDiv>번호: {number}</StyledBoxDiv>;
};

export default Top2;

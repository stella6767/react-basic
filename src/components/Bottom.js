import React from 'react';
import Bottom1 from './Bottom1';
import { StyledBoxDiv } from './StyledComponent';

const Bottom = (props) => {
  const { add, minus } = props;

  return (
    <StyledBoxDiv>
      <Bottom1 add={add} minus={minus} />
    </StyledBoxDiv>
  );
};

export default Bottom;

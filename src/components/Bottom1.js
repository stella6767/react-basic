import React from 'react';
import Bottom2 from './Bottom2';
import { StyledBoxDiv } from './StyledComponent';

const Bottom1 = (props) => {
  const { add, minus } = props;
  return (
    <StyledBoxDiv>
      <Bottom2 add={add} minus={minus} />
    </StyledBoxDiv>
  );
};

export default Bottom1;

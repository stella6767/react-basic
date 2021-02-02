// useRef (html 태그의 id)

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div>
      <Title>안녕</Title>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './features/Header';
import Main from './features/Main';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`


export default App;

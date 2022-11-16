import React from 'react';
import styled from 'styled-components';

const AppBg = styled.div`
  background-image: url(/bg.jpg);
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position-y: center;
  position: relative;
`;
const GameBg = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #fff;
  opacity: 0.3;
`;

function App() {
  return <AppBg className="App">
    <GameBg />
  </AppBg>;
}

export default App;

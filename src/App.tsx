import React from 'react';
import styled from 'styled-components';
import GameSection from './components/GameSection';

const AppBg = styled.div`
  background-image: url(/bg.jpg);
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-position-y: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GameBg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #fff;
  opacity: 0.3;
  top: 0;
  right: 0;
`;
const GamePlace = styled.div`
  width: 1200px;
  height: 800px;
  z-index: 2;
`;

function App() {
  return (
    <AppBg className="App">
      <GamePlace>
        <GameSection />
      </GamePlace>
      <GameBg />
    </AppBg>
  );
}

export default App;

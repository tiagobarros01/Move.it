import React from 'react';
import { BarContainer, IconsContainer } from './style';

const LeftBar = () => {
  console.log('oi');

  return (
    <BarContainer>
      <div>
        <img src="/icons/logo.svg" alt="Logo" />
      </div>
      <IconsContainer>
        <div>
          <img src="/icons/home.svg" alt="Home" />
        </div>
        <div>
          <img src="/icons/leaderboard.svg" alt="Leaderboard" />
        </div>
      </IconsContainer>
      <div>
        <div />
      </div>
    </BarContainer>
  );
};

export default LeftBar;

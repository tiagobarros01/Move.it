/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router';
import React from 'react';
import Previous from '../Previous';
import { BarContainer, IconsContainer } from './style';

const LeftBar = () => {
  const router = useRouter();

  return (
    <BarContainer>
      <div>
        <img src="/icons/logo.svg" alt="Logo" />
      </div>
      <IconsContainer>
        <div>
          <img src="/icons/home.svg" alt="Home" />
        </div>
        <div
          onClick={(() => {
            router.push('/leaderboard');
          })}
        >
          <img src="/icons/leaderboard.svg" alt="Leaderboard" />
        </div>
      </IconsContainer>
      <div>
        <Previous />
      </div>
    </BarContainer>
  );
};

export default LeftBar;

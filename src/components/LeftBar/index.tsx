/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router';
import React from 'react';
import Previous from '../Previous';
import {
  BarContainer, HomeIcon, IconContainer, IconsContainer, LeaderboardIcon,
} from './style';

const LeftBar = () => {
  const router = useRouter();

  return (
    <BarContainer>
      <div>
        <img src="/icons/logo.svg" alt="Logo" />
      </div>
      <IconsContainer>
        {router.pathname === '/game' ? (
          <>
            <IconContainer>
              <HomeIcon
                src="/icons/home.svg"
                onClick={(() => {
                  router.push('/game');
                })}
              />
            </IconContainer>
            <IconContainer>
              <LeaderboardIcon
                src="/icons/off-leaderboard.svg"
                onClick={(() => {
                  router.push('/leaderboard');
                })}
              />
            </IconContainer>
          </>
        ) : (
          <>
            <IconContainer>
              <HomeIcon
                src="/icons/off-home.svg"
                onClick={(() => {
                  router.push('/game');
                })}
              />
            </IconContainer>
            <IconContainer>
              <LeaderboardIcon
                src="/icons/leaderboard.svg"
                onClick={(() => {
                  router.push('/leaderboard');
                })}
              />
            </IconContainer>
          </>
        ) }

      </IconsContainer>
      <div>
        <Previous />
      </div>
    </BarContainer>
  );
};

export default LeftBar;

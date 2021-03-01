import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ThemeProvider } from 'styled-components';

import React from 'react';
import GlobalStyle from '../styles/global';

import {
  Container, PositionSection, Ranking, TopLeaderboard,
  RankingSection,
  ContentProfile,
  Title,
} from '../styles/pages/Leaderboard';
import ThemeSwitcher from '../components/ThemeSwitcher';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import usePersistedState from '../../utils/usePersistedState';
import LeftBar from '../components/LeftBar';

import Profile from '../components/Profile';
import { ChallengesProvider } from '../contexts/challengesContext';
import { GameProps } from './game';

export default function Leaderboard(props: GameProps) {
  const { level, currentExperience, challengesCompleted } = props;

  const [theme, setTheme] = usePersistedState('theme', light);

  const { title } = theme;

  const toggleTheme = () => {
    setTheme(title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <ChallengesProvider
        level={level}
        currentExperience={currentExperience}
        challengesCompleted={challengesCompleted}
      >
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <LeftBar />
        <Container>
          <Head>
            <title>Start | move.it</title>
          </Head>
          <div>
            <Title>Leaderboard 🏆</Title>
          </div>
          <PositionSection>
            <TopLeaderboard>
              <div>
                <div>
                  <strong>POSITION</strong>
                </div>
                <div id="user">
                  <strong>USER</strong>
                </div>
              </div>
              <div>
                <div id="challenges">
                  <strong>
                    CHALLENGES
                  </strong>
                </div>
                <div>
                  <strong>
                    EXPERIENCE
                  </strong>
                </div>
              </div>
            </TopLeaderboard>
            <Ranking>
              <RankingSection>
                <div>
                  <p>1</p>
                </div>
                <ContentProfile>
                  <Profile />
                  <div>
                    <div>
                      <span>
                        {challengesCompleted}
                        {' '}
                      </span>
                      Finished
                    </div>
                    <div>
                      <span>
                        {currentExperience}
                        {' '}
                      </span>
                      xp
                    </div>
                  </div>
                </ContentProfile>
              </RankingSection>
            </Ranking>
          </PositionSection>
          <GlobalStyle />
        </Container>
      </ChallengesProvider>
    </ThemeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

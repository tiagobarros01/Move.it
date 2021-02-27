import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ThemeProvider } from 'styled-components';

import React from 'react';
import GlobalStyle from '../styles/global';

import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/Header';
import Profile from '../components/Profile';
import { Container, ContentPosition, Section } from '../styles/pages/Game';
import ChallengeBox from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/countdownContext';
import { ChallengesProvider } from '../contexts/challengesContext';
import ThemeSwitcher from '../components/ThemeSwitcher';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import usePersistedState from '../../utils/usePersistedState';

interface GameProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Game(props: GameProps) {
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
        <Container>
          <Head>
            <title>Start | move.it</title>
          </Head>
          <ExperienceBar />
          <CountdownProvider>
            <Section>
              <ContentPosition>
                <div>
                  <Profile />
                  <CompletedChallenges />
                </div>
                <Countdown />
              </ContentPosition>
              <div>
                <ChallengeBox />
              </div>
            </Section>
          </CountdownProvider>
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

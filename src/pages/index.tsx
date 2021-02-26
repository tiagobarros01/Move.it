import Head from 'next/head';
import { GetServerSideProps } from 'next';

import React from 'react';
import GlobalStyle from '../styles/global';

import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/Header';
import Profile from '../components/Profile';
import { Container, Section } from '../styles/pages/Home';
import ChallengeBox from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/countdownContext';
import { ChallengesProvider } from '../contexts/challengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { level, currentExperience, challengesCompleted } = props;
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <Container>
        <Head>
          <title>Start | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <Section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </Section>
        </CountdownProvider>
        <GlobalStyle />
      </Container>
    </ChallengesProvider>
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

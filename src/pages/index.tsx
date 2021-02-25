import Head from 'next/head';

import React from 'react';
import GlobalStyle from '../styles/global';

import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/Header';
import Profile from '../components/Profile';
import { Container, Section } from '../styles/pages/Home';
import ChallengeBox from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/countdownContext';

export default function Home() {
  return (
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
  );
}

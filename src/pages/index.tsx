import React from 'react';
import Head from 'next/head';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/Header';
import Profile from '../components/Profile';
import GlobalStyle from '../styles/global';
import { Container, Section } from '../styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Start | move.it</title>
      </Head>
      <ExperienceBar />
      <Section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div />
      </Section>
      <GlobalStyle />
    </Container>
  );
}

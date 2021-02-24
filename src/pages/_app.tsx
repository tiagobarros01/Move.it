import React from 'react';
import { ChallengesProvider } from '../contexts/challengesContext';
import '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;

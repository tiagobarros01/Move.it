import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import {
  LoginContent, LoginName, LoginSection, LogoLeft, LogoRight, GitHubButton,
  ButtonUsername,
} from '../styles/pages/Login';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <ThemeProvider theme={light}>
      <LoginContent>
        <Head>
          <title>Login | Move.it</title>
        </Head>
        <LoginSection>
          <LogoLeft>
            <img src="icons/bigLogo.svg" alt="Logo" />
          </LogoLeft>
          <LogoRight>
            <div>
              <img src="white-logo-full.svg" alt="Logo" />
            </div>
            <div>
              <strong>Welcome!</strong>
              <LoginName>
                <input
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Write your username"
                />
                <ButtonUsername
                  type="button"
                  onClick={(() => {
                    router.push('/game');
                  })}
                  disabled={name === ''}
                >
                  <img src="icons/arrowToRight.svg" alt="Next" />
                </ButtonUsername>
              </LoginName>
              <GitHubButton type="button">
                <img src="icons/github.svg" alt="github" />
                Login with your Github
                <br />
                to get started
              </GitHubButton>
            </div>
          </LogoRight>
        </LoginSection>
        <GlobalStyle />
      </LoginContent>
    </ThemeProvider>
  );
}

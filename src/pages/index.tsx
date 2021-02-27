import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import {
  LoginContent, LoginName, LoginSection, LogoLeft, LogoRight,
} from '../styles/pages/Login';

export default function Home() {
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
              <p>
                <img src="icons/github.svg" alt="github" />
                Login with your Github
                <br />
                to get started
              </p>
              <LoginName>
                <input type="text" placeholder="Write your username" />
                <button type="button">
                  <img src="icons/arrowToRight.svg" alt="Next" />
                </button>
              </LoginName>
            </div>
          </LogoRight>
        </LoginSection>
        <GlobalStyle />
      </LoginContent>
    </ThemeProvider>
  );
}

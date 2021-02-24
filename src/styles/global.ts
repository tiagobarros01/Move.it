import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, button {
  font-family: 'Inter', sans-serif;
}

body {
  background: var(--background);
  color: var(--text);
}

body, input, textarea, button {
  font: 400 1rem 'Inter', sans-serif;
}

button {
  cursor: pointer;
  outline: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

:root {
  --white: #fff;
  --background: #f2f3f5;
  --gray-line: #dcdde0;
  --text: #666666;
  --text-highlight: #b3b9ff;
  --title: #2e384d;
  --red: #e8384d;
  --red-dark: #d9415f;
  --green: #4cd62b;
  --green-dark: #49b22a;
  --blue: #5965e0;
  --blue-dark: #3953b8;
  --blue-twitter: #2aa9e0;
}

@media (max-width: 1080px) {
html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
html {
    font-size: 87.5%;
  }
}

`;

export default GlobalStyle;

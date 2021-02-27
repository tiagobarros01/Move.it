import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  transition: 200ms;
}

body, button {
  font-family: 'Inter', sans-serif;
}

body {
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
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

@media (max-width: 1200px) {
html {
    font-size: 93.75%;
  }
}

@media (max-width: 992px) {
html {
    font-size: 87.5%;
  }
}

@media (max-width: 768px) {
html {
    font-size: 81.25%;
  }
}

@media (max-width: 576px) {
html {
    font-size: 75%;
  }
}

`;

export default GlobalStyle;

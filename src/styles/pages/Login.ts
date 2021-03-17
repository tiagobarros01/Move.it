import styled from 'styled-components';

export const LoginContent = styled.div`
  background: ${(props) => props.theme.colors.blue};
  height: 100vh;
`;

export const LoginSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  padding-top: 5%;
`;

export const LogoLeft = styled.div`
  & img {
    width: 90%;
  }
`;

export const LogoRight = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-evenly;
  flex-direction: column;

  padding-left: 2rem;

  & strong {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 2.25rem;
  }

  & input {
    padding: 1.3rem;

    height: 4rem;

    border: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;

    color: ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.DarkBlue};

    outline-color: ${(props) => props.theme.colors.primary};
    outline-width: thin;
  }

  & input::placeholder {
    color: #b2b9ff;
  }
`;

export const ButtonUsername = styled.button`
  width: 5rem;
  height: 4rem;

  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;

  border: 0;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.DarkGreen},
    ${(props) => props.theme.colors.green}
  );

  transition: 1s;

  &:disabled {
    background: grey;
    cursor: not-allowed;
  }

  & img {
    text-align: center;
  }
`;

export const LoginName = styled.div`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: left;
`;

export const GitHubButton = styled.button`
  height: 4rem;

  border: 0;
  border-radius: 5px;

  width: 22.8rem;

  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 2px solid ${(props) => props.theme.colors.DarkBlue} ;
  color: ${(props) => props.theme.colors.title};

  transition: 500ms;

  & svg path{
    fill: ${(props) => props.theme.colors.title};
    
  }

  &:hover {
    background: #161b22;
    color: ${(props) => props.theme.colors.primary};

    & svg path{
    fill: ${(props) => props.theme.colors.primary};
    
  }
  }
`;

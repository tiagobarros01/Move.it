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

  & p {
    font-size: 1.2rem;
    margin-top: 1.5rem;

    color: #B2B9FF;

    display: flex;
    align-items: center;

    & img {
      margin-right: 1.5rem;
    }
  }

  & input {
    padding: 1.3rem;

    height: 4rem;

    border: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    color: ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.DarkBlue};

    outline-color: ${(props) => props.theme.colors.primary};
    outline-width: thin;
  }

  & input::placeholder {
    color: #B2B9FF;
  }

  & button {
    width: 5rem;
    height: 4rem;

    border: 0;
    background-image: linear-gradient(to right, ${(props) => props.theme.colors.DarkBlue}, ${(props) => props.theme.colors.blue} ); 
    
    & img {
      text-align: center;
    }
  }
`;

export const LoginName = styled.div`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: left;
`;

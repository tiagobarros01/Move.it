import styled from 'styled-components';

export const CountdownPosition = styled.div`
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }

  & > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${(props) => props.theme.colors.secondary};
    box-shadow: 0 0 60px Rajdhani;
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 6.5rem;
    }
  }

  & > div span {
      flex: 1;
  }

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  & div span:first-child {
    border-right: 1px solid ${(props) => props.theme.colors.lineGray};
  }

  & div span:last-child {
    border-left: 1px solid ${(props) => props.theme.colors.lineGray};
  }
`;

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 5px;

  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.title};

  font-size: 1.25rem;
  font-weight: 600;

  transition: 200ms;

  @media (max-width: 768px) {
    width: 100%;
    margin: 2rem auto;
  }

  & img {
    margin-left: 1rem;
  }

  &:not(:disabled):hover {
    border-bottom: 3px solid ${(props) => props.theme.colors.blue};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.title};
    cursor: not-allowed;

    border-bottom: 3px solid ${(props) => props.theme.colors.green};

    @media (max-width: 768px) {
    width: 100%;
    margin: 2rem auto;
  }
  }
`;

export const CountdownButtonActive = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 5px;

  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.title};
  border: 1px solid ${(props) => props.theme.colors.lineGray};

  font-size: 1.25rem;
  font-weight: 600;

  transition: 200ms ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    margin: 2rem auto;
  }

  &:not(:disabled):hover {
    border-bottom: 3px solid ${(props) => props.theme.colors.DarkRed};
  }
`;

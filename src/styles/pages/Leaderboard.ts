/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

export const Container: any = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 700px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.title};
`;

export const PositionSection = styled.section`
  width: 100%;
`;

export const TopLeaderboard = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    & strong {
      font-size: 90%;
      color: ${(props) => props.theme.colors.text};
    }

    & #user {
      margin-left: 2rem
    }

    & #challenges {
      margin-right: 3.3rem
    }

    & > div:nth-child(2) {
      margin-right: 1.6rem;
    }

  }
`;

export const Ranking = styled.div`
  width: 100%;
`;

export const RankingSection = styled.section`
  width: 100%;
  height: 5.5rem;

  display: flex;
  align-items: center;

  border-radius: 5px;

  & > div:first-child {
    width: 4.5rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    background: ${(props) => props.theme.colors.secondary};

    & > p {
      font-weight: 600;
      color: ${(props) => props.theme.colors.text};
      font-size: 130%;
    }  
  }
`;

export const ContentProfile = styled.div`
  width: 100%;
  height: 5.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.colors.secondary};

  margin-left: .5rem;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
      margin-right: 3rem;
    }

    & > div:first-child {
      margin-right: 5rem;
    }
  }

  & img#photo {
    width: 4rem;
    height: 4rem;
    margin-left: 1rem;
  }

  & strong {
    font-size: 100%;
  }

  & span {
    color: ${(props) => props.theme.colors.blue};
  }
`;

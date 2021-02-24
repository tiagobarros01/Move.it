import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/challengesContext';
import {
  ChallengeActive, ChallengeBoxContainer, ChallengeNotActive, ChallengeFailedButton,
  ChallengeSucceededButton,
} from './style';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);
  // const { type, description, amount } = activeChallenge;

  return (
    <ChallengeBoxContainer>
      { activeChallenge ? (
        <ChallengeActive>
          <header>
            Earn
            {' '}
            {activeChallenge.amount}
            {' '}
            xp
          </header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>New challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeFailedButton type="button" onClick={resetChallenge}>Failed</ChallengeFailedButton>
            <ChallengeSucceededButton type="button">Completed</ChallengeSucceededButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>End a cycle to receive a new challenge</strong>
          <p>
            <img src="icons/level-up.svg" alt="level Up" />
            Level up by completing challenges
          </p>
        </ChallengeNotActive>
      ) }
    </ChallengeBoxContainer>
  );
};

export default ChallengeBox;

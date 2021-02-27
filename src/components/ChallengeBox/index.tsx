import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/challengesContext';
import { CountdownContext } from '../../contexts/countdownContext';
import {
  ChallengeActive, ChallengeBoxContainer, ChallengeNotActive, ChallengeFailedButton,
  ChallengeSucceededButton,
} from './style';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeSucceeded = () => {
    completedChallenge();
    resetCountdown();
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };

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
            <ChallengeFailedButton type="button" onClick={handleChallengeFailed}>Failed</ChallengeFailedButton>
            <ChallengeSucceededButton type="button" onClick={handleChallengeSucceeded}>Completed</ChallengeSucceededButton>
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

import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/challengesContext';
import CompletedChallengesContainer from './style';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <CompletedChallengesContainer>
      <span>Completed challenges:</span>
      <span>{challengesCompleted}</span>
    </CompletedChallengesContainer>
  );
};

export default CompletedChallenges;

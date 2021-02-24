import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/challengesContext';
import { Header, View } from './style';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Header>
      <span>0 xp</span>
      <View>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience}
          {' '}
          xp
        </span>
      </View>
      <span>
        {experienceToNextLevel}
        {' '}
        xp
      </span>
    </Header>
  );
};

export default ExperienceBar;

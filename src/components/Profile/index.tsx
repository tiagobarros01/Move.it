import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/challengesContext';
import { InfoContainer, ProfileContainer } from './style';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <ProfileContainer>
      <img src="https://github.com/tiagobarros01.png" alt="Tiago Barros" />
      <InfoContainer>
        <strong>Tiago Barros</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level
          {' '}
          {level}
        </p>
      </InfoContainer>
    </ProfileContainer>
  );
};

export default Profile;

import React from 'react';
import { InfoContainer, ProfileContainer } from './style';

const Profile: React.FC = () => (
  <ProfileContainer>
    <img src="https://github.com/tiagobarros01.png" alt="Tiago Barros" />
    <InfoContainer>
      <strong>Tiago Barros</strong>
      <p>
        <img src="icons/level.svg" alt="Level" />
        Level 1
      </p>
    </InfoContainer>
  </ProfileContainer>
);

export default Profile;

import React, { useContext } from 'react';
import { useSession } from 'next-auth/client';
import { ChallengesContext } from '../../contexts/challengesContext';
import { InfoContainer, ProfileContainer } from './style';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  const [session, loading] = useSession();

  return (
    <ProfileContainer>
      <img src={session.user.image} alt={session.user.name} id="photo" />
      <InfoContainer>
        <strong>{session.user.name}</strong>
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

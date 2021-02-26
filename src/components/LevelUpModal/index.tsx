import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/challengesContext';
import { ModalContainer, Overlay } from './style';

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <ModalContainer>
        <header>{level}</header>

        <strong>Congrats</strong>
        <p>You reached a new level!</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close window" />
        </button>
      </ModalContainer>
    </Overlay>
  );
};

export default LevelUpModal;

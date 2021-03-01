import React from 'react';
import PreviousContainer from './style';

const Previous = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <PreviousContainer onClick={goBack}>
      <img src="/icons/arrowToRight.svg" alt="Previous" />
    </PreviousContainer>
  );
};

export default Previous;

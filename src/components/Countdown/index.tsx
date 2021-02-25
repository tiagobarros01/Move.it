import React, { useContext } from 'react';
import { CountdownContext } from '../../contexts/countdownContext';
import {
  CountdownButton,
  CountdownButtonActive,
  CountdownContainer,
} from './style';

const Countdown: React.FC = () => {
  const {
    minutes, hasFinished, resetCountdown, seconds, isActive, startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {hasFinished ? (
        <CountdownButton disabled>
          Finished countdown
          <img src="./icons/completed.svg" alt="Done" />
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButtonActive type="button" onClick={resetCountdown}>
              Leave countdown
            </CountdownButtonActive>
          ) : (
            <CountdownButton type="button" onClick={startCountdown}>
              Start countdown
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;

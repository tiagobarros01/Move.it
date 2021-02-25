import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--tile);

  & > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px Rajdhani;
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  & > div span {
    flex: 1;
  }

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  & div span:first-child {
    border-right: 1px solid #f0f1f3;
  }

  & div span:last-child {
    border-left: 1px solid #f0f1f3;
  }
`;

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 5px;

  background: var(--white);
  color: var(--title);

  font-size: 1.25rem;
  font-weight: 600;

  transition: 200ms;

  & img {
    margin-left: 1rem;
  }

  &:not(:disabled):hover {
    /* background: var(--blue-dark); */
    border-bottom: 3px solid var(--blue);
  }

  &:disabled {
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;

    border-bottom: 3px solid var(--green);
  }
`;

export const CountdownButtonActive = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 5px;

  background: var(--white);
  color: var(--title);
  border: 1px solid var(--gray-line);

  font-size: 1.25rem;
  font-weight: 600;

  transition: 200ms ease-in-out;

  &:not(:disabled):hover {
    /* background: var(--red);
    color: var(--white); */
    border-bottom: 3px solid var(--red-dark);
  }
`;

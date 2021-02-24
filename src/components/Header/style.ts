import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;

  & > span {
    font-size: 1rem;
  }
`;

export const View = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;

  & > div {
    height: 4px;
    border-radius: 4px;
    background-image: linear-gradient(to right, var(--green), var(--green-dark));
  }

  & > span {
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
  }
`;

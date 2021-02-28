import styled from 'styled-components';

export const BarContainer = styled.div`
  height: 100vh;
  width: 6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  position: absolute;

  background-image: linear-gradient(180deg, ${(props) => props.theme.colors.secondary} 0%, ${(props) => props.theme.colors.secondaryTransparent} 100%);
  filter: drop-shadow(0px 0px 60px ${(props) => props.theme.colors.secondaryShadow});

  & div:first-child {
    width: 100%;
    text-align: center;
    margin-top: 1.5rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & div {
    cursor: pointer;

    &:hover {
      transform: translateY(-7px);
    }
  }

  & div:first-child {
    margin-bottom: 2rem;
    width: 100%;
    height: 2.5rem;

  }
`;

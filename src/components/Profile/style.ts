import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }


  & > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }
`;

export const InfoContainer = styled.div`
  margin-left: 1.5rem;

  & > strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.title};
  }

  & > p {
    font-size: 1rem;
    margin-top: 0.5rem;

    & > img {
      margin-right: 0.5rem;
    }
  }
`;

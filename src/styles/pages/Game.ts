import styled from 'styled-components';

export const ContentPosition = styled.div`
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  & > div {
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }
  }
`;

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 700px;
  }
`;

export const Section = styled.section`
  flex: 1;

  margin-top: 3.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding-bottom: 2rem;
  }
`;

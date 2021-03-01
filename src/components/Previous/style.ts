import styled from 'styled-components';

const PreviousContainer = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;

  border-radius: 15px;
  cursor: pointer;

  background: ${(props) => props.theme.colors.DarkBlue};

  &:hover {
    background: ${(props) => props.theme.colors.blue};
  }

  & img {
    transform: scaleX(-1);
    
  }
`;

export default PreviousContainer;

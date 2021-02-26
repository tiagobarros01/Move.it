import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0px 0px 35px #bfbfbf;
  text-align: center;
  position: relative;

  & header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.blue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  & strong {
    font-size: 2.25rem;
    color: ${(props) => props.theme.colors.title};
  }

  & p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.text};
    margin-top: .25rem;
  }

  & button {
    position: absolute;
    right: .5rem;
    top: .5rem;
    background: transparent;
    border: 0;
    font-size: 0;
  }
`;

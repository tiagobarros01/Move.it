import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 1rem;
`;

export const View = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
`;

export const DivView = styled.div`
  height: 4px;
  border-radius: 4px;
  background: var(--green);
`;

export const CurrentSpan = styled.div`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;

export default Header;

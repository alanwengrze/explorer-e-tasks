import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  height: 4.4rem;
  border: 0;
  padding: 0 1.6rem;
  border-radius: 0.7rem;
  font-size: 1.4rem;
  
  display: flex;
  align-items: center;
  gap: 0.7rem;

  > svg {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.RED_200};
  }
  @media (max-width: ${LAYOUT_BREAKPOINTS.SM}) {
    width: 100%;
    justify-content: space-between;
  }
`;
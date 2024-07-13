import styled from 'styled-components';
import { LAYOUT_BREAKPOINTS } from '../../styles/layoutBreakpoints';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  color: ${({ theme }) => theme.COLORS.BLUE_600};
  
  border: 0;
  height: 5.6rem;
  padding: 0 1.6rem;
  font-weight: 500;
  border-radius: 0.7rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > span {
    font-size: 1.6rem;
  }

  > svg {
    font-size: 2.2rem;
  }

  @media (max-width: ${LAYOUT_BREAKPOINTS.SM}) {
    transition: 0.3s ease-in-out;
    height: 4.4rem;

    > span {
    font-size: 1.2rem;
    } 

    > svg {
      font-size: 1.6rem;
    }
  }
  @media (max-width: ${LAYOUT_BREAKPOINTS.XS}) {
    transition: 0.3s ease-in-out;
    height: 3.2rem;
    padding: 0.8rem;
    > span {
    font-size: 1rem;
    } 

    > svg {
      font-size: 1.2rem;
    }
  }
`;
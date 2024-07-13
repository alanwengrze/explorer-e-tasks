import styled from "styled-components";
import { LAYOUT_BREAKPOINTS } from "../../styles/layoutBreakpoints";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
  padding: 16px 0;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  > h1 {
    font-size: 3.2rem;
  }

  @media (max-width: ${LAYOUT_BREAKPOINTS.SM}) {
    h1{
      transition: 0.3s ease-in-out;
      font-size: 2.4rem;
    }
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;
  display: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    font-size: 3.2rem;
  }

  @media (max-width: ${LAYOUT_BREAKPOINTS.MD}) {
    display: flex;
  }
`;
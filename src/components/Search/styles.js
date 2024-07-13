import styled from "styled-components";

export const Container = styled.section`
  padding: 0 3.2rem;
`;

export const Filters = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 1.4rem;
  margin-right: 1rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
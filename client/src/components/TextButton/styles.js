import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0;
  text-align: center;

  > button {
    background: transparent;
    color: ${({ theme }) => theme.WHITE};
    border: none;
    font-size: 0.8rem;
  }
`;

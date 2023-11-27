import styled from "styled-components";

export const Container = styled.div`
  > button {
    width: 100%;
    height: 3rem;

    background-color: ${({ theme }) => theme.BUTTON_BACKGROUND};
    color: ${({ theme }) => theme.WHITE};

    font-weight: 600;
    font-size: 0.8rem;

    border: 0;
    border-radius: 0.2rem;

    &:disabled {
      opacity: 0.5;
    }
  }
`;

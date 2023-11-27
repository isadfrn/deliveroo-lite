import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;

  > input {
    width: 100%;

    font-size: 1rem;
    height: 3rem;
    padding: 1rem;
    margin-bottom: 1.5rem;

    color: ${({ theme }) => theme.WHITE};
    background: transparent;

    border: 0.1rem solid;
    border-radius: 0.2rem;

    &:placeholder {
      color: ${({ theme }) => theme.FORM_PLACEHOLDER};
    }

    &:focus {
      outline: none;
    }
  }

  > svg {
    margin-left: 16px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  border: 0.1rem solid;
  border-radius: 0.2rem;

  > input {
    width: 100%;
    font-size: 1rem;
    height: 3rem;
    padding: 1rem;

    color: ${({ theme }) => theme.WHITE};
    background: transparent;
    border: none;

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

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin: 0 auto;

  > img {
    max-width: 14rem;
  }

  > div {
    background: transparent;
    width: 90%;

    padding: 1rem;
    border-radius: 0.8rem;

    display: flex;
    flex-direction: column;

    > h2 {
      font-weight: 400;
      text-align: center;
      margin-bottom: 1rem;
      display: none;
    }

    > a {
      margin: 1rem 0;
      text-align: center;
      color: ${({ theme }) => theme.WHITE};
      border: none;
      font-size: 0.8rem;
    }

    > a:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${({ theme }) => theme.screenXG}) {
    flex-direction: row;
    justify-content: space-evenly;

    > div {
      background: ${({ theme }) => theme.FORM_BACKGROUND};
      width: 40%;
      padding: 2rem;

      > h2 {
        display: block;
      }
    }
  }
`;

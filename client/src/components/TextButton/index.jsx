import { Container } from "./styles";

export const TextButton = ({ title, ...rest }) => {
  return (
    <Container>
      <button {...rest}>{title}</button>
    </Container>
  );
};

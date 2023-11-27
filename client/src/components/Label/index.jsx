import { Container } from "./styles";

export const Label = ({ ...rest }) => {
  return (
    <Container>
      <label {...rest} />
    </Container>
  );
};

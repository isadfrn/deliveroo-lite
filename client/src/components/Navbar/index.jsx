import { Container } from "./styles";
import logo from "../../assets/logo.svg";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <Container>
      <img
        src={logo}
        alt="Deliveroo - Takeaway Food Delivery from Local Restaurants & Shops"
      />
      <Input type="text" icon={FiSearch} />
    </Container>
  );
};

import { Container } from "../SignIn/styles";
import logo from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Button } from "../../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {}

  return (
    <Container>
      <img
        src={logo}
        alt="Deliveroo - Takeaway Food Delivery from Local Restaurants & Shops"
      />

      <div>
        <h2>SignUp</h2>

        <Label>Name</Label>
        <Input
          placeholder="Dwight K. Schrute"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <Label>Email</Label>
        <Input
          placeholder="example@example.com"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label>Password</Label>
        <Input
          placeholder="At least 6 characters"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="SignUp" onClick={handleSignUp} />

        <Link to="/">Already have an account?</Link>
      </div>
    </Container>
  );
};

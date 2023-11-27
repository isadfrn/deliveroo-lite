import { Container } from "../SignIn/styles";
import logo from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {}

  return (
    <Container>
      <img src={logo} alt="" />

      <div>
        <h2>Login</h2>

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

        <Button title="Login" onClick={handleSignIn} />

        <Link to="/signup">Signup for an account</Link>
      </div>
    </Container>
  );
};

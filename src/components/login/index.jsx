import React from "react";
import { ButtonContainer, Container, FormContainer, InputContainer, TitleContainer } from "./styles";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Container>
      <TitleContainer>
        <h1>Welcome to Sabre</h1>
        <p>Your system more security</p>
      </TitleContainer>
      <FormContainer>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password</label>
          <input 
            type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <ButtonContainer>
          <button>Login</button>
          <button>Create account</button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  )
}

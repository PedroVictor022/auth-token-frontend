import React, { useState } from "react";
import { ButtonContainer, Container, FormContainer, InputContainer, TitleContainer } from "./styles";
import { api } from "../../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSaveUser = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password
    }
    const response = await api.post('/create', data)
    console.log(response);
    return response
  }

  return (
    <Container>
      <TitleContainer>
        <h1>Welcome to Sabre</h1>
        <p>Create a new account</p>
      </TitleContainer>
      <FormContainer onSubmit={handleSaveUser}>
        <InputContainer>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>
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
          <button type="submit">Create account</button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  )
}

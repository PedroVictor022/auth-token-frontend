import React, { useContext } from "react";
import { ButtonContainer, Container, FormContainer, InputContainer, TitleContainer } from "./styles";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { singInUser, signed } = useContext(AuthContext);

  const handleSingIn = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    }
    await singInUser(data)
  }

  if(signed) {
    return <Navigate to="home"/>
  } else {
    return (
    <Container>
      <TitleContainer>
        <h1>Welcome to Sabre</h1>
        <p>Your system more security</p>
      </TitleContainer>
      <FormContainer onSubmit={handleSingIn}>
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
          <button type="submit">Login</button>
          <Link to="/register">Create account</Link>
        </ButtonContainer>
      </FormContainer>
    </Container>
  )
  }

  
}

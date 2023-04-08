import { useState } from "react";
import Login from "./components/login/index.jsx";
import styled from "styled-components";
import Register from "./components/register/index.jsx";
import { AppRouter } from "./routes/index.jsx";
// import AuthProvider from "./context/auth.js";

function App() {
  return (
    <Container>
      <AppRouter />
    </Container>
    // <AuthProvider>
    // <Container>
    //   {/* <Login /> */}
    //   <Register />
    // </Container>
    // </AuthProvider>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;

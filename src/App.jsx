import { useState } from "react";
import Login from "./components/login/index.jsx";
import styled from "styled-components";
import Register from "./components/register/index.jsx";

function App() {
  return (
    <Container>
      {/* <Login /> */}
      <Register />
    </Container>
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

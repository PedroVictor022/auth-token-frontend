import styled from "styled-components";

export const Container = styled.div`
  width: 400px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;
  padding: 0.3rem;

  border: 1px solid #000;
  border-radius: 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 1rem 2rem;

  h1 {
    font-size: 38.4px;
  }
`;

export const FormContainer = styled.form`
  width: 65%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  width: 70%;

  button {
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;

    font-weight: 700;
    color: #fff;
    background-color: #4284e7;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transition: ease-in;
      background-color: #1c73f5;
    }
  }
`;

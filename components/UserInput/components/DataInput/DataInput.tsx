import { useState } from "react";
import { Container, TextArea, Title, Label } from "./DataInput.styles";
import { DATA } from "../../../../utils/constants";

const ColorInput = ({ userInput, setUserInput }) => {
  const handleChange = e => {
    setUserInput({ type: DATA, newState: e.target.value });
  };

  return (
    <Container>
      <Title>Input Your Data</Title>
      <Label>Example: 2, 4, 7, 9</Label>
      <TextArea onChange={handleChange} placeholder={userInput.data} />
    </Container>
  );
};

export default ColorInput;

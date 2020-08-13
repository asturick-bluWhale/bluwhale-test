import { useState } from "react";
import { Container, InputBox, Title, Label } from "./ColorInput.styles";
import { COLOR } from "../../../../utils/constants";

const ColorInput = ({ userInput, setUserInput }) => {
  const [isValid, setValid] = useState(true);

  const checkIfValid = value => {
    const validHex = /^[0-9A-F]{6}$/i.test(value);

    if (validHex) {
      setValid(true);
      return true;
    }

    setValid(false);
    return false;
  };

  const handleChange = e => {
    if (!checkIfValid(e.target.value)) return;

    setUserInput({ type: COLOR, newState: e.target.value });
  };

  return (
    <Container>
      <Title>Choose a Hex Color</Title>
      <Label isValid={isValid}>{isValid ? "Valid" : "Invalid Hex Value"}</Label>
      <InputBox onChange={handleChange} placeholder={userInput.color} />
    </Container>
  );
};

export default ColorInput;

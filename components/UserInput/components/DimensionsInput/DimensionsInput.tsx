import { Container, InputBox, Title, Label } from "./DimensionsInput.styles";
import { DIMENSIONS } from "../../../../utils/constants";

const DimensionsInput = ({ userInput, setUserInput }) => {
  const handleChange = e => {
    const oldState = userInput.dimensions;

    const newState = {};
    newState[e.target.name] = e.target.value;

    const newDimensions = Object.assign({}, oldState, newState);

    setUserInput({ type: DIMENSIONS, newState: newDimensions });
  };

  return (
    <Container>
      <Title>Enter Dimensions</Title>
      <Label>Height</Label>
      <InputBox name="height" onChange={handleChange} />
      <Label>Width</Label>
      <InputBox name="width" onChange={handleChange} />
    </Container>
  );
};

export default DimensionsInput;

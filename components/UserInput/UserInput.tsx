import { InputContainer, Title } from "./UserInput.styles";

import {
  DimensionsInput,
  ChartTypeInput,
  ColorInput,
  DataInput,
} from "./components";

const UserInput = props => (
  <InputContainer>
    <Title>Enter User Input</Title>
    <DimensionsInput {...props} />
    <ChartTypeInput {...props} />
    <ColorInput {...props} />
    <DataInput {...props} />
  </InputContainer>
);

export default UserInput;

import { Container, Button, Title } from "./ChartTypeInput.styles";
import { CHARTTYPE } from "../../../../utils/constants";

const ChartTypeInput = ({ userInput, setUserInput }) => {
  const state = userInput.chartType;

  const handleClick = e => {
    setUserInput({ type: CHARTTYPE, newState: e.target.name });
  };

  return (
    <Container>
      <Title>Choose a Chart Type</Title>
      <Button name="bar" active={state === "bar"} onClick={handleClick}>
        Bar
      </Button>
      <Button name="line" active={state === "line"} onClick={handleClick}>
        Line
      </Button>
    </Container>
  );
};

export default ChartTypeInput;

import { useEffect, useReducer } from "react";

import { DIMENSIONS, CHARTTYPE, COLOR, DATA } from "../../utils/constants";

import { Chart, TitleBar, UserInput } from "../";
import { PageLayout } from "./App.styles";

const App = () => {
  const initialState = {
    dimensions: { width: "1000", height: "400" },
    chartType: "bar",
    color: "000000",
    data: "",
  };

  const reducer = (state, action) => {
    if (action.type === DIMENSIONS)
      return Object.assign({}, state, { dimensions: action.newState });

    if (action.type === CHARTTYPE)
      return Object.assign({}, state, { chartType: action.newState });

    if (action.type === COLOR)
      return Object.assign({}, state, { color: action.newState });

    if (action.type === DATA)
      return Object.assign({}, state, { data: action.newState });

    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PageLayout>
      <TitleBar />
      <UserInput userInput={state} setUserInput={dispatch} />
      <Chart state={state} />
    </PageLayout>
  );
};

export default App;

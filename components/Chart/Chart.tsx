import { useRef, useEffect, useState, useCallback } from "react";
import { createXScale, createYScale } from "./utils";
import { ChartContainer, SignalWrapper, Container } from "./Chart.styles";
import { Point, YAxis } from "./components";

const Chart = ({ state }) => {
  const chartWidth = state.dimensions.width;
  const chartHeight = state.dimensions.height;

  const ref = useRef(null);

  const signal = state.data.split(",");

  const scaleX = createXScale(signal, chartWidth);

  const signalMin = Math.min(...signal);
  const signalMax = Math.max(...signal);

  const scaleY = createYScale({ min: signalMin, max: signalMax }, chartHeight);

  return (
    <Container>
      <ChartContainer
        chartWidth={chartWidth}
        chartHeight={chartHeight}
        ref={ref}
      >
        <SignalWrapper chartWidth={chartWidth} chartHeight={chartHeight}>
          <g>
            {signal.map((item, i) => {
              console.log(item);
              return (
                <Point
                  color={state.color}
                  xPos={scaleX(i)}
                  yPos={scaleY(item)}
                  key={Math.random()}
                  item={item}
                  color={state.color}
                  height={chartHeight}
                />
              );
            })}
          </g>
        </SignalWrapper>
      </ChartContainer>
    </Container>
  );
};

export default Chart;

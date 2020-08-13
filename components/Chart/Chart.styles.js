import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ChartContainer = styled.div`
  height: ${({ chartHeight }) => chartHeight + "px"};
  width: ${({ chartWidth }) => chartWidth + "px"};
  border: 3px solid ${({ theme }) => theme.colors.gray};
  border-radius: 3px;
  box-sizing: border-box;
  cursor: default;
  position: relative;
  margin-top: 3rem;
`;

export const SignalWrapper = styled.svg`
  width: ${({ chartWidth }) => chartWidth + "px"};
  height: ${({ chartHeight }) => chartHeight + "px"};
`;

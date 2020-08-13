import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h3`
  font-family: verdana;
`;

export const Label = styled.p`
  color: ${({ isValid }) => (isValid ? "green" : "red")};
  font-size: 1.4rem;
  font-family: verdana;
`;

export const InputBox = styled.input`
  display: block;
`;

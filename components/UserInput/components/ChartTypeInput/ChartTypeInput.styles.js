import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h3`
  font-family: verdana;
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  border: 0;
  margin-right: 1rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme, active }) =>
    active ? theme.colors.blue : theme.colors.lightGray};
`;

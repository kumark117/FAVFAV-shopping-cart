import styled from "styled-components";

export const Button = styled.button`
  border-radius: 10px;
  font-size: 15px;
  background-color: ${({ backgroundColor }) => backgroundColor || "green"};
  color: white;

  margin: 5px;
  transition: opacity 0.3s;
`;

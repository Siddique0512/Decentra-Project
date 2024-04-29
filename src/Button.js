import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  height: 60px;
  margin: 0 auto;

  background-color: #232f3e;
  color: white;

  border: none;
  border-radius: 4px;

  font-family: "Lalezar";
  font-size: 1.25em;
  font-weight: 600;

  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    background-color: orange;
    color: black;
  }
`;
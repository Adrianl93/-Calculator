import styled from "styled-components";

export const Container = styled.div`
  margin: ${({ margin }) => margin || "0px"};
  padding: ${({ padding }) => padding || "0px"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items:${({ alignItems }) => alignItems || "center"};
  justify-content:${({ justifyContent }) => justifyContent || "center"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  border: ${({border})=> border || "0px"};
//   color: ${({ color }) => color || "#ff0000"};

//   &:hover {
//     background-color: ${({ backgroundColor }) => backgroundColor || "#1b8f2b"};
//     color: #fff;
//     border-color: ${({ borderColor }) => borderColor || "#1b8f2b"};
//   }
//   &:active {
//     transform: translateY(-1px);
`;


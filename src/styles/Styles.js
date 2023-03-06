import styled from "styled-components";

export const Container = styled.div`
  display: ${({ display }) => display || "flex"};
  margin: ${({ margin }) => margin || "0px"};
  padding: ${({ padding }) => padding || "0px"};
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  align-items:${({ alignItems }) => alignItems || "center"};
  justify-content:${({ justifyContent }) => justifyContent || "center"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  border: ${({border})=> border || "0px"};
  border-radius:${({borderRadius})=>borderRadius || "0px"};
  font-family: 'fraunces', serif;
 
`;
export const DisplayContainer = styled.div`
display:flex;
grid-column: 1/-1;
padding:15px;
height:100px;
margin:10px 10px 20px;
flex-direction:column;
align-items:flex-end;
background-color: #363636;
border-radius:32px;
text-align: right;
justify-content: space-between;
word-break: break-all;
box-shadow:0px 0px 0px 10px #00000033;
color:#fff;
font-family: 'fraunces', serif;
`
export const DisplayH1 = styled.h1`
display:flex;
align-items:flex-end;
word-break: break-all;
color:#fff;
font-family: 'fraunces', serif;
font-size: ${({ fontSize }) => fontSize || "1.5em"};
margin:5px;
`


export const CalculatorContainer = styled.div`
display: ${({ display }) => display || "grid"};
margin: ${({ margin }) => margin || "0px"};
padding: ${({ padding }) => padding || "0px"};
flex-direction: ${({ flexDirection }) => flexDirection || "column"};
align-items:${({ alignItems }) => alignItems || "center"};
justify-content:${({ justifyContent }) => justifyContent || "center"};
width: ${({ width }) => width || "350px"};
height: ${({ height }) => height || "550px"};
border: ${({border})=> border || "3px solid black"};
border-radius:${({borderRadius})=>borderRadius || "32px"};

background-color: ${({ backgroundColor }) => backgroundColor || "#00916E"};
box-shadow: ${({boxShadow }) =>boxShadow || "15px 10px 1px 5px #00000066"};
grid-template-columns: ${({columns})=> columns || "repeat(4, 75px)"};
grid-template-rows: ${({rows})=>rows || "160px repeat(5,75px)"};
font-family: 'fraunces', serif;
`;

export const Button = styled.button`
 height:${({height})=> height || "60px"};
  width: ${({ width }) => width || "60px"};
  padding: ${({ padding }) => padding || "1em 1em"};
  font-family: 'fraunces', serif;
  font-size: ${({ fontSize }) => fontSize || "1.5em"};
  text-transform: ${({ textTransform }) => textTransform || "uppercase"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "2.5px"};
  font-weight: ${({ fontWeight }) => fontWeight || "200"};
  color: ${({ color }) => color || "#FFF"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#00916E"};
  border: ${({ border }) => border || "none"};
  border-radius: ${({ borderRadius }) => borderRadius || "32px"};
  box-shadow: ${({boxShadow }) =>boxShadow || "5px 5px 10px -3px #00000040, -5px -5px 15px 3px #00ffc11f"};
  transition: all 0.01s ease 0s;
  outline: ${({outline }) =>outline || "none"};
  font-family: 'fraunces', serif;
 
  cursor: pointer;
  
  &:hover {
    background-color: #086f54;
   
    
    //transform: translateY(-7px);
  }
  &:active {
    transform: translateY(3px);
  }
`;


export const ButtonX2 = styled.button`
  width: ${({ width }) => width || "135px"};
  height:${({height})=> height || "60px"};
  padding: ${({ padding }) => padding || "1em 1em"};
  font-family: 'fraunces', serif;
  font-size: ${({ fontSize }) => fontSize || "1.5em"};
  text-transform: ${({ textTransform }) => textTransform || "uppercase"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "2.5px"};
  font-weight: ${({ fontWeight }) => fontWeight || "200"};
  color: ${({ color }) => color || "#FFF"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#00916E"};
  border: ${({ border }) => border || "none"};
  border-radius: ${({ borderRadius }) => borderRadius || "32px"};
  box-shadow: ${({boxShadow }) =>boxShadow || "5px 5px 10px -3px #00000040, -5px -5px 15px 3px #00ffc11f"};
  transition: all 0.01s ease 0s;
  outline: ${({outline }) =>outline || "none"};
  grid-column:span 2}
  cursor: pointer;
  font-family: 'fraunces', serif;
  &:hover {
    background-color: #086f54;
   
    
    //transform: translateY(-7px);
  }
  &:active {
    transform: translateY(3px);
  }
`;




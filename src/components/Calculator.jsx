import React from "react";
import {useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
// import {  } from "../actions";
import { Link } from "react-router-dom";
import { Container, Button, CalculatorContainer,DisplayContainer,ButtonX2, DisplayH1 } from "../styles/Styles";






export default function Calculator(){
    

    

    return(
        <Container width={"100%"} height={"100%"}>
            <CalculatorContainer padding={"15px"}>
                <DisplayContainer>
                    <DisplayH1 fontSize={"1.5em"}>Valor Anterior</DisplayH1>
                    <DisplayH1 fontSize={"2em"}>Valor Actual</DisplayH1>
                </DisplayContainer>
                
                    <ButtonX2>C</ButtonX2>
                    <Button>&larr;</Button>
                    <Button>%</Button>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button>X</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>-</Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>+</Button>
                    <ButtonX2>0</ButtonX2>
                    <Button>.</Button>
                    <Button>=</Button>
                
            </CalculatorContainer>
        </Container>
    )
}


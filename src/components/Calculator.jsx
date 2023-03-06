import React from "react";
import {useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
// import {  } from "../actions";
import { Link } from "react-router-dom";
import { Container } from "../styles/Styles";






export default function Home(){
    

    

    return(
        <Container>
            <Container width={"350px"} height={"500px"} border={"3px solid black"}>
                <Container>display
                    <Container>Valor Anterior</Container>
                    <Container>Valor Actual</Container>
                </Container>
            </Container>
        </Container>
    )
}


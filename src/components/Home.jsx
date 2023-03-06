import React from "react";
import {useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
// import {  } from "../actions";
import { Link } from "react-router-dom";
import { Container } from "../styles/Styles";
import Calculator from "./Calculator"

export default function Home(){
    

    

    return(
<Container>
    <Calculator></Calculator>
</Container>

    )
}



import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import { FaInstagram,  FaLinkedinIn ,FaGithub} from "react-icons/fa";


const Icons = () => {
    return (
        <Main>
        
        <Icon>
            
            
            
            <a className = "Link" href="https://github.com/sagartare12?tab=repositories"><FaGithub  className="margin" /></a>
            <a href="https://www.linkedin.com/in/sagar-tare-173301214/"><FaLinkedinIn className="margin" /></a>
            <a href="https://www.instagram.com/sagartare2014/"><FaInstagram className="margin" /></a>
        </Icon>
        <div className="vLine"></div>
        </Main>
    )
}

export default Icons


const Main = styled.div`
    display : flex;
     .vLine {
      border: 1px solid black;
      height: 120px;
      margin: 0 0 10% 10px;
   }
`;
const Icon = styled.div`

    display : flex;
    flex-direction : column;
    font-size: 22px;
   
a{
   
    color:black;
   
}
  
    .margin{
    margin-top: 12px;
    background-color: white;
    &:hover{
        padding:2px;
        background:black;
        color:white;
    }
    }
`;


{/* <a href="https://github.com/sagartare12?tab=repositories"></a> */}
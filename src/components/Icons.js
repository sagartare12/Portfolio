import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import { FaInstagram,  FaLinkedinIn ,FaGithub} from "react-icons/fa";


const Icons = () => {
    return (
        <Main>
        
        <div className="icons">
        <a  href="https://github.com/sagartare12?tab=repositories"><FaGithub  className="margin" /></a><br />
        <a href="https://www.linkedin.com/in/sagar-tare-173301214/"><FaLinkedinIn className="margin" /></a><br />
        <a href="https://www.instagram.com/sagartare2014/"><FaInstagram className="margin" /></a>
        </div>
        <div className="vLine"></div>
        </Main>
    )
}

export default Icons


const Main = styled.div`

position: fixed;
bottom:6px;
margin-left:25px;

    .icons{
        text-align:left;
    }

    a{
        
        display-content:center;
        margin:10px 0 10px 10px;
        font-size:22px;
        color:black;
        
        &:hover{
            background:black;
            color:white;
           
            padding:2px;
         
        }
    }
        
    

     .vLine {
         
     border-left: 3px solid black;
  height: 90px;
  margin:5px 0 0 19px;
   }
`;



{/* <a href="https://github.com/sagartare12?tab=repositories"></a> */}





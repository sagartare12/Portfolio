import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
function Navbar() {

    const LINKS = [
        {to:'/' , name:'HOME'},
        {to:'/projects' , name:'WORKS'},
        {to:'/about' , name:'ABOUT'},
        {to:'/contact', name:'CONTACT'}
    ]
    return (
        <Nav>
            <span>Portfolio</span>
            <NavMenu>
            {
                LINKS.map((item)=>(
                    
                        
                    <Link to={item.to} style={{textDecoration:'none'}}><span>{item.name}</span></Link>
                    
                    
                ))
            }
            </NavMenu>
        </Nav>
    )
}

export default Navbar

const Nav =  styled.nav`
background: white;
position:sticky;
top:0;
    height: 65px;
 
    align-items: center;
    display: flex;
    font-weight:bold;

    padding: 0  36px;
    z-index: 2;
`;

const NavMenu = styled.div`
    display: flex;
    margin-left:60%;
    align-items: center;
    justify-content: center;
    text-align: center;
         span{
             font-size:14px;
             font-weight:normal;
             overflow: none;
        color: black;
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor: pointer;
        justify-content: right;
            &:hover{
                font-weight:bold;
                  display: inline;
  border-bottom: 2px solid black;
            }

         }
`;
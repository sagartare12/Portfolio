import React from 'react'
import styled from 'styled-components'
import About from './About'
import Projects from './Projects'
import Icons from './Icons'
const Home = () => {
    return (
        <div style={{marginLeft:'5%', marginRight: '5%'}}>
        <Main>
          
            <h3>Hello, I'm</h3>
            <h1>Sagar Tare</h1>
            <h2>I build things for the web.</h2>
            <h6>I'm Frontend Developer ,
                build things for web applications <br />
                and websites .
            </h6>
            <span className="button">SEE MY RESUME</span>
            
            
          
        </Main>
        <Icons />
        <About />
        <Projects />
        </div>
    )
}

export default Home

const  Main = styled.div`
   
 
        margin:10% 0 5% 30%;
        
        text-align: left;
        .button{
            margin-top: 30%;
            border: 1px solid black;
            padding: 10px 12px;
            border-radius: 5%;
            
            &:hover{
                background:black;
                color: white;
            }
        }
         

`;

import React from 'react'
import styled from 'styled-components'
import About from './About'
import Projects from './Projects'
import Icons from './Icons'
import Contact from './Contact'
const Home = () => {
    return (
        <div style={{marginLeft:'5%', marginRight: '5%',marginBottom:'5%'}}>
          
        <Main>
            <h3>Hello, I'm</h3>
            <h1>Sagar Tare</h1>
            <h2>I build things for the web.</h2>
            <h6>I'm Frontend Developer ,
                build things for web applications <br />
                and websites .
            </h6>
            <span className="button"><a href="https://drive.google.com/file/d/15jSoN4LZgd_KHvqHARpZ1WlAb3sAzw-v/view?usp=sharing" alt="">SEE MY RESUME</a></span>
            
            
          
        </Main>
        <About />
        <Projects />
        <Contact />
      
        </div>
    )
}

export default Home

const  Main = styled.div`
   
 
        margin:10% 0 20% 30%;
        
        text-align: left;
        .button{
            margin-top: 30%;
            border: 1px solid black;
            padding: 10px 12px;
            border-radius: 5%;
            a{
                text-decoration:none;
                color:black;
            }
            
            &:hover{
                background:black;
                color: white;
                border:2px solid rgb(143,143,143);
                a{
                    color:white;
                }
            }
        }
         

`;

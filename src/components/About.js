import React from 'react'
import styled from 'styled-components'

const About = () => {
    
    const SKILLS = ['HTML','CSS','Javascript(ES6)','React.js',
    ,'Git','Firebase','Bootstrap','SASS','Styled-Components','node.js','express.js']
    return (
        <Main>
            <h4>About Me </h4>
            <span>Hello I'm Sagar , a Frontend Developer who enjoys a build things
                that live on internet. I develope websites and web apps that provides 
                perfect user interface with efficient.<br/>
                After graduating from Mumbai University , I joined Web development online course 
                on the Shaw Academy . Once I completed that I thought I should lern modern technologies then 
                I joined online training in  <a href="https://drive.google.com/file/d/1lOF9UipmGWIzgEEex5mc89Q5Y-NDq13D/view?usp=sharing">" Internshala "</a>online platoform and I complete 6 weeks online
                training where I worked wide variety of interesting real world projects.<br/><br/>
                
                <strong>Skills :</strong>
                <div className="grid">
                {
                    SKILLS.map((skills)=>(
                        <li>{skills}</li>
                    ))
                }
                </div>
            </span>

        </Main>
    )
}

export default About

const Main = styled.div`
    background: rgb(240,240,240);
    padding: 4%;
    text-align: justify;
    width: 40%;
    margin: 3% auto 10% auto;

    span{
        font-size: 15px;
        font-weight:500;

        a{
            text-decoration:none;
            text-decoration-color: blue;

            &:hover{
                text-decoration:underline;
                font-weight: bold;
            }
        }
    }

    .grid{
        margin: 2% 0 0 4%;
        font-size:14px;
        font-weight:bold;
        display: grid;
        grid-template-columns:repeat(2,minmax(0,1fr));
    }
 `;
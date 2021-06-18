import React from 'react'

const About = () => {
    
    const SKILLS = ['HTML','CSS','Javascript(ES6)','React.js','Firebase',
    ,'Git','Firebase','Bootstrap','SASS','Styled-Components']
    return (
        <div>
            <h4>About Me </h4>
            <h5>Hello I'm Sagar , a Frontend Developer who enjoys a build things
                that live on internet. I develope websites and web apps that provides 
                perfect user interface with efficient.
                After graduating from Mumbai University , I joined Web development online course 
                on the Shaw Academy . Once I completed that I thought I should lern modern technologies then 
                I joined online training in  " Internshala " online platoform and I complete 6 weeks online
                training where I worked wide variety of interesting real world projects.
                
                Skills :
                {
                    SKILLS.map((skills)=>(
                        <li>{skills}</li>
                    ))
                }
                
            </h5>

        </div>
    )
}

export default About

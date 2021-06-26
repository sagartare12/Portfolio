import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {useData} from '../Context'
import { FaExternalLinkAlt,FaGithub} from "react-icons/fa";

const Projects = props => {

    const {data} = useData();

    const [mainProject] = (
        [data.filter((pro => pro.type === "main_project"))]
    )
    
    const [projects] = (
        [data.filter((pro)=> pro.type === "project")]
    )
    console.log('main', mainProject)
    return (
        <Main >
                <h3>Some things I've been build</h3>
        {
            mainProject.map(project => (
                <Container>
            <div className="pro">
                <img src={project.demo_pic} alt="" />
            </div>
            <div className="right_container">
                <h5>Feature Project</h5>
                <h6>{project.name}</h6>
                <div className="expl">
                <span className="cont">{project.details}</span> 
                </div>
                      <h6>{project.built_with}</h6>
                <Icons>
                    <a className = "Link" href={project.gitHub_link}><FaGithub  className="margin" /></a>
                    <a className = "Link" href={project.website_link}><FaExternalLinkAlt  className="margin" /></a>
                </Icons>
            </div>
        </Container>
            ))
        }
        <hr />
            <h4>Other Projects</h4>
            <Link to="/archive"><h5>View the archive</h5></Link>
        <div className="">
 <SubContainer>
                 <div className="main">
        {
            projects.map((project)=>(
                

            <div className="pro">
                <div className="icons">
                    <a className = "Link" href={project.gitHub_link}><FaGithub  className="margin" /></a>
                    <a className = "Link" href={project.website_link}><FaExternalLinkAlt  className="margin" /></a>
                </div>
                <h4>{project.name}</h4>
                <span> {project.details}<br/>
                     <strong>Used:</strong> {project.built_with} 
                </span>
            </div>
            
            ))
        }
        </div>
            </SubContainer>
        </div>       
        </Main>
    )
}



export default Projects


const Main = styled.div`
    margin: 5% 5% 0 5%;
    h3{
        text-align:left;
    }
  
`;
const Container = styled.div`
    margin:0 0 5% 5%;
    display:flex;
    .pro{
      
        z-index: -1;
       
    img{
        width:100%;
        border: 1px solid rgb(224,224,224)
    }
}
   

   
.right_container{
    
    text-align:justify;
    h5,h6{
        text-align:right;
        line-height:2%; 
    }
    .expl{
        font-size:90%;
        background:rgb(240,240,240);
        padding:10px;
        margin-left:-20px;
        
        
    }
    }
`;

const Icons = styled.div`
    display:flex;
    position: relative;
    margin-left:87%;
    a{
        margin:0 16%;
        color:black;
        &:hover{
            padding:3px;
            background:black;
            color:white;
        }
    }
`;

const SubContainer = styled.div`
width:60%;
  margin: 0 auto 12% auto;
    .main{
       
        margin:0 auto 0 auto;
       display: flex;
        flex-wrap: wrap;

        .pro{
            width:230px;
            margin:2% 0 2% 2%;
     background:rgb(240,240,240);
     text-align:justify;
     
    
     padding:0 4% 4% 4%;
     h4{
        
         line-height:0;
     }
        }
    }
   
    .icons{
        position:relative;
        padding:8% 0 2% 0;
        margin: 12% 0 2% 70%;
        a{
            margin:  0 11%;
            color:black;
            &:hover{
                padding:2%;
                color:white;
                background:black;
            }
        }

    }

`;
//  width:20%;
//     background:rgb(240,240,240);
//     text-align:justify;
//     margin:0 auto 0 auto;
    
//     padding:0 2% 2% 2%;
//     h4{
        
//         line-height:0;
//     }
//     span{
        
//     }
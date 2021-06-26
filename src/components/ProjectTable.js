import React from 'react'
import styled from 'styled-components'
import { FaExternalLinkAlt,FaGithub} from "react-icons/fa";
import {useData} from '../Context'



const ProjectTable = () => {
    const {data} = useData();
   
    return (
        <Table>
            <table >
               

  {
      data.map((item)=>(
  <tr className="rows">
    
    <td>2021</td>
    <td>{item.name}</td>
    <td className="built_with">{item.built_with}</td>
    <Icons> <a className = "Link" href={item.gitHub_link}><FaGithub  className="margin" /></a>
                    <a className = "Link" href={item.website_link}><FaExternalLinkAlt  className="margin" /></a></Icons>
    
  </tr>
  ))
      }

</table>
               
        </Table>
    )
}

export default ProjectTable

const Table =  styled.div`
margin-top:5%;
    table{
        margin: 0 auto 0 auto;
        width: 80%;
        text-align:left;

        
        .heading{
            font-size:85%;
            font-weight:400;
            margin-bottom:10%;
        }
        .rows{
            font-size:85%;
            
                margin: 5% 0;

                .built_with{
                    color: rgb(22,61,104);
                    font-weight: 600;




                }
                
            

           
            &:hover{
                background: rgb(240,240,240);
            }
        }
    }
`;



const Icons = styled.td`
    a:first-child{
        margin-left: 0;
    }
    a{
        margin: 0 12%;
        color: black;
        &:hover{
            background:black;
            color: white;
        }
    }
`;
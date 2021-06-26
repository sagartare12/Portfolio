import React, {useState,useEffect} from 'react'
import ProjectTable from './ProjectTable'
import styled from 'styled-components'
const Archive = () => {
    

    

    return (
        <div><Heading>
            <h3>Archive</h3>
            <h4>A big list of things I've worked on</h4>
            
            <ProjectTable />
            </Heading>
        </div>
    )
}

export default Archive

const Heading = styled.div`
margin: 5% 5%  0 10%;
    text-align:left;
    h3,h4{
        font-size:95%;
        font-weight:500;
    }
`;
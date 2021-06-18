import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Projects = props => {
    return (
        <div>
        <div>
            <h4>Some things I've been build</h4>
            <h5>Feature Project</h5>
            <h6>Box-Office web app</h6>
            <span>Built a SPA web app to allow user to check the information 
                of movie actors and movies done by the actor as well as  visualize the 
                profile of particular actor. This website built by me in React internshala 
                training where I developed and tested the front end using React.  
                <strong>Built with :</strong>   React.js  , html , SCSS . </span>
        </div>
        <div>
            <h4>Other Projects</h4>
            <Link to="/archive"><h5>View the archive</h5></Link>
            <div>
                <h6>E-commerce web app</h6>
                <span> This is a simple web app in which user can check the details of product and 
                    user add or remove  any products in cart.Context api use for the state management
                     <strong>Used:</strong> React.js , Bootstrap , CSS , Html </span>
            </div>
        </div>
        </div>
    )
}

Projects.propTypes = {

}

export default Projects

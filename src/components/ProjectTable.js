import React from 'react'



const ProjectTable = () => {
    const tableStructure = [
     
             'Year',
             'Name',
             'Built With',
            'Links'
        
      
    ]
    const rows = [{
        call1: '2014',
        cell2: 'app1',
        cell3: 'css',
        link1:'sa',
        link:'da'
    },
{
        call1: '2014',
        cell2: 'app1',
        cell3: 'css',
        link1:'sa',
        link:'da'
    },
{
        call1: '2014',
        cell2: 'app1',
        cell3: 'css',
        link1:'sa',
        link:'da'
    }]
    return (
        <div>
            <table style={{marginLeft:'auto',marginRight:'auto'}}>
               
  <tr>
    <th>Year</th>
    <th>Name</th>
    <th>Built With</th>
    <th>Links</th>
  </tr>
  {
      rows.map((item)=>(
  <tr>
    
    <td>{item.call1}</td>
    <td>{item.cell2}</td>
    <td>{item.cell3}</td>
    <td>{item.link1}</td>
    
  </tr>
  ))
      }

</table>
               
        </div>
    )
}

export default ProjectTable

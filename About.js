import React from 'react'
import Details from './db.json'

function About(){
  
    return(
        
        <div>
          {
            Details && Details.map(item =>{
                return(
                    <div key={item.id}> 
                     <h1>{item.title}</h1>
                     {item.body}<br/>
                     ...This project is coded by: <strong>{item.author}</strong> using <strong>{item.language}</strong> language...<br /><br />
                    </div>
                )
            })
          }
        </div>
    )
}
export default About
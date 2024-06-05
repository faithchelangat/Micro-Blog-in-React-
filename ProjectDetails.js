import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useShare from './useShare';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function ProjectDetails(){
  const {id}=useParams();
 const {projects: items, Loading, isError}=useShare('http://localhost:8000/blogs/'+ id)
 const nav=useHistory();


 const handleUpdate=()=>{
    //fetch('http://localhost:8000/blogs/'+ items.val)
        //alert("project updated successfully")
        nav.push('/update');
    }
 const handleClick=()=>{
    fetch('http://localhost:8000/blogs/'+ items.id, {
        method: 'DELETE'
    })
    .then(()=>{
       nav.push('/')
    })
 }
    return(
        <div className='blog-details'>
           
            {Loading && <div>Loading ...</div>}
            {isError && <div>{isError}</div>}
            {items && (
                <article>
                <h2>{ items.title }</h2>
                <p>Coded by {items.author}</p> 
               <div>{items.body}</div>
                <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    )
}
export default ProjectDetails
import {useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function ShareComponent(props){
    const projects=props.item
    const title=props.title

    return(
        <div>
            <h1>{title}</h1>
             {projects.map((items) => ( 
                <div className="blog-preview" key={items.id}>
                    <Link to={`/blogs/${items.id}`}>
                       <h2> {items.title} </h2>
                       <p> Coded by {items.author} </p>
                    </Link>
                  
                    </div>
            ))}
        </div>
    )
}
export default ShareComponent
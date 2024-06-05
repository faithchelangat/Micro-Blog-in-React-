import ShareComponent from './ShareComponent';
import useShare from './useShare';

function Home(){
    const  {Loading, projects, isError}=useShare("http://localhost:8000/blogs")

    
    return(
        <div className="home">
            {isError && <div> {isError} </div>}
            {Loading && <div> Loading ... </div>}
           {projects &&<ShareComponent item={projects} title="My projects"  /> }
        </div>
    )
}
export default Home
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NotFound (){
    const back=useHistory();

    const handleBack=()=>{
        back.push('/')
    }
    return(
        <div className="not-found">
        <h2> Error 404 </h2>
        <p>That Page cannot be found</p><br />
         <button onClick={handleBack}> Back to the homepage ..</button>
        {/*<Link to="/"> Back to the homepage ..</Link>*/}
        
        </div>
    )
}
export default NotFound
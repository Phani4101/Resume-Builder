
import {Link} from 'react-router-dom';

const ResumeHeading=()=>{
    return (<div className="list-group">
    <Link to="/Profile" className="list-group-item list-group-item-action" >Profile</Link>
    <Link to="/About" className="list-group-item list-group-item-action">About</Link>
    <Link to="/Skills" className="list-group-item list-group-item-action">Skills</Link>
    <Link to="/Experience" className="list-group-item list-group-item-action">Experience</Link>
    <Link to="/Education" className="list-group-item list-group-item-action">Education</Link>
    <Link to="/Portfolios" className="list-group-item list-group-item-action">Portfolios</Link>

</div>);
}
export default ResumeHeading;
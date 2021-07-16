import { Header, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Resume-header.css';
const Skills = () => {
    return (<> <Header className="text">
        Skills
    </Header>
        <Form>
            <div className="m-5">
                <label for="exampleFormControlTextarea1" className="form-label">Skills</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </Form>
        <button className="btn btn-lg btn-warning ms-5"><Link to="/" className="text-dec">Back</Link></button>
    <button className="btn btn-lg btn-warning ms-5">Submit</button></>);
}
export default Skills;
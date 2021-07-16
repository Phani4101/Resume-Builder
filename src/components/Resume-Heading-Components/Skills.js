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
        <button className="btn btn-warning"><Link to="/">Back</Link></button></>);
}
export default Skills;
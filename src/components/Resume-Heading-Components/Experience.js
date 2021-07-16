import { Header, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Resume-header.css';
const Experience = () => {
    return (<>
        <Header className="text">
            Experience
        </Header>
        <Form className="mt-5">
            <div className="m-5">
                <label for="exampleFormControlTextarea1" className="form-label">Company Name</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>
            <div className="m-5">
                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </Form>
        <button className="btn btn-warning"><Link to="/">Back</Link></button> </>);
}
export default Experience;
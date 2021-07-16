import { Header, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Resume-header.css';
const Education = () => {
    return (<>
        <Header className="text">
            Education
        </Header>
        <Form>
            <div className="m-5">
                <label for="exampleFormControlTextarea1" className="form-label">College Name</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>
            <div className="m-5">
                <label for="exampleFormControlTextarea1" className="form-label">Degree</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>
            <div className="m-5">
                <label for="exampleFormControlTextarea1" className="form-label">Course</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>
            <div className="m-5">
                <label for="exampleFormControlTextarea1" className="form-label">Graduation Year</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>
        </Form>
        <button className="btn btn-lg btn-warning ms-5"><Link to="/" className="text-dec">Back</Link></button>
    <button className="btn btn-lg btn-warning ms-5">Submit</button></>);
}
export default Education;
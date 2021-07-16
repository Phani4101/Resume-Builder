import { Header, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Resume-header.css';
const Profile = () => {
  return (<>
    <Header className="text">
      Profile
    </Header>
    <Form className="ml-3">

      <div className="m-5">
        <label for="exampleFormControlTextarea1" className="form-label">First Name</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
      </div>
      <div className="m-5">
        <label for="exampleFormControlTextarea1" className="form-label">Middle Name</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
      </div>
      <div className="m-5">
        <label for="exampleFormControlTextarea1" className="form-label">Last Name</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
      </div>

    </Form>
    <button className="btn btn-lg btn-warning ms-5"><Link to="/" className="text-dec">Back</Link></button>
    <button className="btn btn-lg btn-warning ms-5">Submit</button>
  </>);
}
export default Profile;
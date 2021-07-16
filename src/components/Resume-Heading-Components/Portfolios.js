import { Header, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Resume-header.css';
const Portfolios = () => {
    return (<>
        <Header className="text">
            Portfolios
        </Header>
        <Form>
            <div className="m-5">
                <label for="exampleFormControlTextarea1" className="form-label">Twitter</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>
            <div className="m-5">
                <label for="exampleFormControlTextarea1" className="form-label">LinkedIn</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>
            <div className="m-5">
                <label for="exampleFormControlTextarea1" className="form-label">Github</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>
        </Form>
        <button className="btn btn-warning"><Link to="/">Back</Link></button></>);
}
export default Portfolios;
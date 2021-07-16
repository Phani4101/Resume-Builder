import ResumeHeading from "../Resume-Heading/Resume-Heading"
import { BrowserRouter as Router,Route } from "react-router-dom";
import Profile from "../Resume-Heading-Components/Profile";
import About from "../Resume-Heading-Components/About";
import Skills from "../Resume-Heading-Components/Skills";
import Experience from "../Resume-Heading-Components/Experience";
import Education from "../Resume-Heading-Components/Education";
import Portfolios from "../Resume-Heading-Components/Portfolios";


const FirstHalf = () => {
    return(
        <div className = "col-md-6 p-0 bg-info h-md-100" >
            <h1 className="first-half-heading">Resume Details</h1>
            <Router>
            <Route path="/Profile" component={Profile} />
            <Route path="/About" component={About} />
            <Route path="/Skills" component={Skills} />
            <Route path="/Experience" component={Experience} />
            <Route path="/Education" component={Education} />
            <Route path="/Portfolios" component={Portfolios} />
            <Route path="/" component={ResumeHeading} exact />
            </Router>
    </div>);
}
export default FirstHalf;
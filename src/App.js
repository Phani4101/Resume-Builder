import './App.css';
import Navbar from './components/Navbar/Navbar'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'materialize-css/dist/css/materialize.min.css';
import FirstHalf from './components/Page-Parts/FirstHalf';
import SecondHalf from './components/Page-Parts/SecondHalf';

function App() {
  let resumedetail = [
    {
      "profile": {
        "first": "Sarma",
        "last": "Rachakonda",
        "middle": "V.S.N."
      },
      "About": "Highly driven recent business school graduate seeking a full-time position in finance where I can lend my knowledge of market analytics to help your organization improve profitability.",
      "Education":
      {
        "Degree": "B.Tech",
        "college": "National Institute of Technology, Jamshedpur",
        "Course": "Information Technology",
        "GraduationYear": "2015"
      },
      "Skills": [
        "C++ ", ", HTML ", ", CSS ", ", Javascript ", ", ReactJS "],
      "Experience": [{
        "company": "Xyz Company",
        "Description": "Worked has an software developer for 4 year and done many projects"
      }, {
        "company": "abc Company",
        "Description": "Worked has an full stack developer for 3 year and done many projects"
      }]
    }
  ]

  return (
    <>
      <Navbar />
      <div className="d-md-flex h-md-100 align-items-center margin-set height-set-up">
        <FirstHalf />
        <SecondHalf details={resumedetail} />
      </div>

    </>
  );
}

export default App;

import './secondhalf.css';
// import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min.js';

const SecondHalf=(props)=>{
    let array=props.details;
    return (
        <div className="col-md-6 p-0 bg-success h-md-100 loginarea container">
         <div className="secondhalf-container">
           <div className="resumeheader">
               <h3>{array[0].profile.first+" "+array[0].profile.middle+array[0].profile.last}</h3>
               <p>{array[0].About}</p>
           </div>
           <div className="resumebody">
              <div>
                  <h4>Education</h4>
                  <p>{array[0].Education.college}</p>
                  <span className="edu">{array[0].Education.Degree}</span>
                  <span className="edu">{array[0].Education.GraduationYear}</span>
                  <p>{array[0].Education.Course}</p>
              </div>
              <div>
                  <h4>Experiences</h4>
                  <h6>{array[0].Experience[0].company}</h6>
                  <p>{array[0].Experience[0].Description}</p>
                  <hr/>
                  <h6>{array[0].Experience[1].company}</h6>
                  <p>{array[0].Experience[1].Description}</p>
              </div>
              <div>
                  <h4>Skills</h4>
                  {array[0].Skills.map((item)=>(
                      <span>{item}</span>
                  ))}
              </div>
           </div>
         </div>
         <button className="btn btn-danger aligh-center">Preview</button>
        </div>
    )
}
export default SecondHalf;
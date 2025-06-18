import React from 'react';
import './FilterPage.css'; // Make sure this CSS file exists and is imported
import { useState } from 'react';
import { RiCarouselView } from 'react-icons/ri';


const StyledForm = () => {

  // const [query, setQuery] = useState('');
  const [level, setLevel] = useState('');
  const [courses, setCourses] = useState([]);
  const[description, setdescription]=useState('')
 const[free,setfree]=useState('')

  const fetchCourses = async () => {
    // setLoading(true);
    let query='Python'
    const response = await fetch(`http://localhost:8080/api/scrape?q=${query}&level=${level}`);
    console.log('entered fetch courses atleast')
    const data = await response.json();
    if (Array.isArray(data)) {
      setCourses(data);
      console.log('data',data)
      // setLoading(false)
    } else {
      console.error("Unexpected data:", data);
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault(); // prevent page reload
    // console.log('Form submitted:', formData);
    console.log('level',level)
    console.log('descriptoion',description)
    console.log('free',free)

    fetchCourses()
    
    // You can also send this data to backend using fetch/axios
    // axios.post('/api/submit', formData)
  };

  return (
    <div>
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Customise your python course selection</h2>
        <form onSubmit={handlesubmit}>
          <div className="form-group">
            <label className="form-label">What type of courses do you prefer?</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="courseType" value="Free" onChange={(e) => setfree(e.target.value)}/> Free
              </label>
              <label>
                <input type="radio" name="courseType" value="Paid" onChange={(e) => setfree(e.target.value)} /> Paid
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" >Level</label>
            <select className="form-select" onChange={(e) => setLevel(e.target.value)}>
              <option value="">Select an option</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Any other comments</label>
            <textarea onChange={(e) => setdescription(e.target.value)}
              className="form-textarea"
              placeholder="Your message..."
            ></textarea>
          </div>

          <div className="form-action">
          
            <a href="#" className="form-link">
           <span style={{color:'black'}}> Go back to home page? </span> 
           Click here
            </a>
            <br />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>

      


    </div>
    <br></br>
    <ul>
          {courses.map((course, idx) => (
            <li key={idx}>
              {/* <strong>{course.title}</strong><br /> */}
            
              <a href={course.link} target="_blank" rel="noreferrer">Subject: {course.course_name}</a>
               <br></br>
               

              <br></br>
              <a>Course level: {course.course_level}</a>
              <br></br>
              Course Language: {course.course_language}
              <br></br>
               Course provider: {course.course_provider}
               <br></br>
               Course-rating: {course.course_avg_rating}
              <br></br>
              Course id- {course.course_id}
              <br></br>
              Course subject- {course.course_subject}
              <br></br>
              Course is free- {String(course.course_is_free)}
              <br></br>
              Course institution- {course.course_institution}
              <br></br>
              Course is classroom -{String(course.is_classroom)}
              <br></br>
              Course certificate-{String(course.course_certificate)}
            </li>
          ))}
        </ul>
    </div>
   
  );
};

export default StyledForm;

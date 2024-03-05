import { useState } from 'react'
import './App.css'
import logo from '/src/assets/fau_logo/FAUlogo.png'
import CourseCardEvent from '/src/components/CourseCardEvent'  //course card component that wll be used to display the course information
import CourseList from '/src/components/CourseList'; 
import List from '/src/components/CoursesDB.json'; //import the course list from the json file


function App() {
  return (
    <>
      <div>
        <a href="https://www.fau.edu/engineering/dessa/pdf/flowcharts/flowchart-bscs.pdf" target="_blank">
          <img src={logo} className="logo" alt="FAU logo" />
        </a>
      </div>
      <h1>FAU Bachelor of Science in Computer Science</h1>
      <h2>for Students Who Began Fall 2021 & Later</h2>
      <p>
        Click on the FAU logo for the pdf of the flowchart
      </p>
      <div className="courseCard">

      {/* Pass courseList directly to CourseList */}
      <CourseList courseDB={List} />
      </div>
    </>
  )
}

export default App

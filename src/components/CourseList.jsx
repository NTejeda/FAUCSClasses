import React from "react";
import CourseCardEvent from "./CourseCardEvent";
import courseDB from "./CoursesDB.json"; 

function CourseList({ courseDB = [] }) {
  return (
    <div className="courseCard">
      {courseDB.map((course, index) => (
        <CourseCardEvent
          key={course.code}
          img={course.img}
          code={course.code}
          name={course.name}
          description={course.description}
          prereq={course.prereq}
          coreq={course.coreq}
          relatedMaterialLink={course.relatedMaterialLink}
        />
      ))}
    </div>
  );
}

export default CourseList;
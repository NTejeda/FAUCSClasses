import React from "react";

function CourseCardEvent({ img, code, name, description, prereq, coreq, relatedMaterialLink }) {
  return (
    <div className="courseCardEvent">
      <img src={img} alt={name} />
      <h2>{code}</h2>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h4>Prerequisites: {prereq}</h4>
      <h4>Corequirements: {coreq}</h4>
      <a href={relatedMaterialLink} target="_blank" rel="noopener noreferrer" className="relatedMaterialLink" >Click Here for Related Material</a>
    </div>
  );
}

export default CourseCardEvent;

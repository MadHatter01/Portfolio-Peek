import React from "react";


const Project = ({project, imgurl}) => {
  return (

      <div className="project">
        <div>
          <p>{project.year}</p>
        </div>
        <div>
          <img
            src= {imgurl}
            alt="project placeholder"
          ></img>
        </div>
        <div className="card-body">
          <h3 align="center">{project.title}</h3>
          <p align="center">{project.description}</p>
        </div>
      </div>
    
  );
};


export default Project;
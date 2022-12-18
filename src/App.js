import React, { useEffect, useState } from "react";
import "./App.css";
import Project from './Components/Project.jsx';

const API_URL =
  "https://raw.githubusercontent.com/ninjas-at-work/Sample-JSON/main/projects.json";
const App = () => {
  const [projects, setProjects] = useState([])
  const [search, setSearch] = useState([])
  const searchProjects = async (title) => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    
    if(title === undefined){
    setProjects(data.projects);
    }
    else{
   let  temp = data.projects
   let final =[]
     temp.forEach(element => {
     if(element.title === search){
      final.push(element)
     }
     console.log(final)
     setProjects(element)
     });
   
    }
    console.log(projects)
  };

  useEffect(() => {
    searchProjects();
  }, []);
  return (
    <div className="app">
      <h1>Portfolio Peek</h1>
      <div className="search">
        <input
          placeholder="Search Projects"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
        />
        <button id="searchbtn" onClick={() => {searchProjects(search)}}>
          Search
        </button>

      </div>
      
      <div className="main-container">
      {
        projects?.length > 0 ?
       ( projects.map((project)=>(
          <Project key={project.id} project={project} imgurl={"https://placeimg.com/640/480/arch"}/>
        ))):
<div>No projects</div>
      }  
     
      </div>
    </div>
  );
};

export default App;

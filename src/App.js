import React, { useEffect } from "react";
import "./App.css";

const API_URL =
  "https://raw.githubusercontent.com/ninjas-at-work/Sample-JSON/main/projects.json";
const App = () => {
  const searchProjects = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    console.log(data.projects);
  };

  const project1 = {
    
      "id": 1,
      "title": "Project - A",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "year": "2022"
    
  }
  useEffect(() => {
    searchProjects();
  }, []);
  return (
    <div className="app">
      <h1>Portfolio Peek</h1>
      <div className="search">
        <input
          placeholder="Search Projects"
          value="Project-A"
          onChange={() => {}}
        />
        <button id="searchbtn" onClick={() => {}}>
          Search
        </button>

      </div>
      
      <div class="main-container">
        
      <div class="project">
      <div>
      <p>{project1.year}</p>
      </div>
      <div>
      <img src="https://placeimg.com/640/480/any" alt = "project placeholder">
      </img></div>
      <div class="card-body">
      <p>{project1.title}</p>
      </div>
    
      </div>
      </div>
    </div>
  );
};

export default App;

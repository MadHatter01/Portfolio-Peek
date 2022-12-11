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
        
      <p> Main cards</p>
      </div>
    </div>
  );
};

export default App;

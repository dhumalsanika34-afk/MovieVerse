import React from "react";
import "./Home.css"; 


function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Trip Planner</h1>
      <img 
       
        alt="Trip Planner" 
        className="home-image"
      />
      <p className="home-info">
        Plan your journeys with ease! Our Trip Planner helps you organize destinations, 
        track itineraries, and make your travel stress-free.
      </p>
    </div>
  );
}

export default Home;

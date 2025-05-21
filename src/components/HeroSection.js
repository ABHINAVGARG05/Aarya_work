import React from "react";
import "./HeroSection.css";
import "../App.css";
import bgVideo from '../assets/videos/video-3.mp4'

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={bgVideo} autoPlay loop muted></video>
    </div>
  );
}

export default HeroSection;

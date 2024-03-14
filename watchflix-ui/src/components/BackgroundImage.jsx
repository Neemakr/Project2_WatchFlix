import React from "react";
import './BackgroundImage.css';
import background from "../assets/login.jpg";

export default function BackgroundImage() {
  return (
    <div className="Container">
      <img src={background} alt="background" />
    </div>
  );
}

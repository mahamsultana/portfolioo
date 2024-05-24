import React from "react";
import { ReactTyped as Typed } from "react-typed";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="text-container">
          <h1>
            <Typed
              strings={["Omni Digital Solutions"]}
              typeSpeed={40}
              backSpeed={50}
              loop={false}
            />
          </h1>
          <p>
            We provide cutting-edge digital solutions to help businesses thrive
            in the modern world. Our team specializes in web development,
            digital marketing, and IT consulting, ensuring your business stays
            ahead of the curve with the latest technology and strategies.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://media.designrush.com/tinymce_images/93610/conversions/3D-elements-content.jpg"
            alt="Omni Digital Solutions"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import "./work.css";
import Work1 from "../assets/work1.jpg";
import Work2 from "../assets/work2.jpg";
import Work3 from "../assets/work3.jpg";

const WorkSection = () => {
  return (
    <div className="work-section" id="work">
      <h2 className="text-center">Our Work</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="work-item">
              <img src={Work1} alt="Project 1" className="img-fluid" />
              <h3>Passport Bros</h3>
              <p>
                Passport Bros Website** Designed the Passport Bros website, your
                go-to source for travel expertise. Offering essential visa
                information, travel tips, and destination insights, it's your
                passport to seamless journeys.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-item">
              <img src={Work2} alt="Project 2" className="img-fluid" />
              <h3>MAG 2 Shadow War Game</h3>
              <p>
                Created the website for MAG 2 Shadow War, providing
                comprehensive game information and enhancing the player
                experience. It focuses on delivering a seamless and immersive
                experience for the gaming community.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-item">
              <img src={Work3} alt="Project 3" className="img-fluid" />
              <h3>American Standard Medical Services Website</h3>
              <p>
                Developed a website for American Standard Medical Services,
                guiding patients in making informed medical travel decisions &
                selecting the right healthcare providers. The site emphasizes
                patient satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;

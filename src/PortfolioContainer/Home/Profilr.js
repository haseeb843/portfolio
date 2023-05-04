import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../Utilities/ScrollService";

const Profilr = () => {
  return (
    <div className="profile-continer">
      <div className="profile-parent">
        <div className="profile-detail">
          <div className="colz">
            <div className="colz-icon">
              <a href="a">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="as">
                <i className="bi bi-google"></i>
              </a>
              <a href="a">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="a">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M<span className="highlighted-text">Haseeb</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Muhammad Haseeb",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Mern Stack Dev",
                    1000,
                    "Cross Platform Dev",
                    1000,
                    "React Dev",
                    1000,
                  ]}
                ></Typical>
              </h1>
              <span>
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-optins">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="Resume1.pdf" download={"Resume1.pdf"}>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profilr;

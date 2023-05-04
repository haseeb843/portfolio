import React from "react";
import ScreenHead from "../../Utilities/ScreenHeading/ScreenHead";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./AboutMe.css";

const AboutMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I am a skilled ReactJS developer with 1 years of experience building complex applications using modern web development tools and techniques. I am passionate about creating responsive, user-friendly interfaces that enhance the user experience. My expertise includes  ReactJS, Redux, JavaScript, HTML, and CSS. I am also familiar with popular ReactJS libraries such as Material UI, and I am constantly learning and exploring new ways to improve my skills and stay up-to-date with the latest industry trends.",
    highlight: {
      bullets: [
        "Interactive Front End as per the design",
        "Skilled ReactJS developer with 1 years of experience building dynamic and responsive user interfaces",
        "Proficient in ReactJS, Redux, JavaScript, HTML, and CSS",
        "Fast learner who stays up-to-date with the latest web development trends",
        "Familiar with popular ReactJS libraries such as Material UI, React Bootstrap, and Styled Components",
      ],
    },
    heading: "Here are a Few Highlights",
  };
  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlight.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHead title={"About Me"} subHeading={"Why Choose Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-datails">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlight">
              <div className="about-me-heading">
                <span>{SCREEN_CONSTANTS.heading}</span>
              </div>

              {renderHighlights()}
            </div>
            <div className="about-me-options">
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
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

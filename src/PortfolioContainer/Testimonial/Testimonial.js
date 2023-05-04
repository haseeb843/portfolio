import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import ScreenHead from "../../Utilities/ScreenHeading/ScreenHead";
import "./Testimonial.css";
import lady from "../../../src/Img/Testimonial/lady.png";
import mike from "../../../src/Img/Testimonial/mike.png";
import man from "../../../src/Img/Testimonial/man.png";
import shape from "../../../src/Img/Testimonial/shape-bg.png";
import Hanif from "../../../src/Img/Testimonial/Hanif.jpg";
import Zeee from "../../../src/Img/Testimonial/Zeee.jpg";
import imran from "../../../src/Img/Testimonial/imran.jpg";
import Muneeb from "../../../src/Img/Testimonial/Muneeb.jpg";

const Testimonial = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <ScreenHead
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section " id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I had the pleasure of working with Haseeb Anwaar on a
                      complex web application that required expertise in React.
                      Haseeb was an invaluable member of the team, consistently
                      delivering high-quality code that was well-organized and
                      easy to maintain.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={Hanif} alt="no internet connection"></img>
                    <h5>Muhammad Hanif Tariq</h5>
                    <p>Software Engineer | Next JS</p>
                    <a href="https://www.linkedin.com/in/muhammad-hanif-tariq/">
                      linkedin
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      As a UI/UX designer, I had the pleasure of collaborating
                      with Haseeb Anwaar on a React-based web application.
                      Working with them was an absolute pleasure - they were not
                      only highly skilled in React development
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={Zeee} alt="no internet connection"></img>
                    <h5>Muhammad Zeeshan Zafar</h5>
                    <p>Senior UX Designer</p>
                    <a href="https://www.linkedin.com/in/muhammad-zeeshan-zafar-a7659115a/">
                      linkedin
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I had the pleasure of working with Haseeb Anwaar on a
                      complex web application that required expertise in React.
                      Haseeb was an invaluable member of the team, consistently
                      delivering high-quality code that was well-organized and
                      easy to maintain.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={imran} alt="no internet connection"></img>
                    <h5>Imran Aslam</h5>
                    <p>Software Engineer | React.js</p>
                    <a href="https://www.linkedin.com/in/imran-aslam-240/">
                      linkedin
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I had the pleasure of collaborating with Haseeb on a
                      project that required integrating a Laravel backend with a
                      React frontend.Haseeb was an exceptional React developer
                      who worked seamlessly with our Laravel team.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={Muneeb} alt="no internet connection"></img>
                    <h5>Muneeb Amjad</h5>
                    <p>Laravel Developer</p>
                    <a href="https://www.linkedin.com/in/muhammad-muneeb-amjad-44a803210/">
                      linkedin
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
};

export default Testimonial;

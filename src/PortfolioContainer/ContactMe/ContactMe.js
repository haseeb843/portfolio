import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Typical from "react-typical";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHead from "../../Utilities/ScreenHeading/ScreenHead";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import Footer from "../Home/Footer/Footer";
import "./ContactMe.css";

const ContactMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);
  const form = useRef();
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    setBool(true);

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setBanner("error");
      toast.error("Please Fill All Fields");
      setBool(false);
    } else {
      emailjs
        .sendForm(
          "service_5em5i3u",
          "template_pvbcir4",
          form.current,
          "8vhsau3oDDf25AtL3"
        )
        .then(
          (result) => {
            console.log("error in email", result.text);
          },
          (error) => {
            console.log("success in email", error.text);
          }
        );
      setBanner("Message Send");
      toast.success("Message Send");
      setBool(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHead subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="https://web.facebook.com/?_rdc=1&_rdr">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="https://www.instagram.com/instructor_ehizeex/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA">
            <i className="fa fa-youtube-square" />
          </a>
          <a href="https://twitter.com/Ehiedu_baba">
            <i className="fa fa-twitter" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form ref={form} onSubmit={submitForm}>
            <p>{banner}</p>
            <label>Name</label>
            <input type="text" name="user_name" onChange={handleName} />
            <label>Email</label>
            <input type="email" name="user_email" onChange={handleEmail} />
            <label>Message</label>
            <textarea name="message" onChange={handleMessage} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;

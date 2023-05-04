import React from "react";
import Footer from "./Footer/Footer";
import Profilr from "./Profilr";
import Header from "./Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Profilr />
      <Footer />
    </div>
  );
};

export default Home;

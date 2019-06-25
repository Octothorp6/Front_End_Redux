import React from "react";
import HomeMap from "../../components/HomePage/Map";
import Features from "../../components/HomePage/Features";
import SectionPills from "../../components/HomePage/navPills/SectionPills";
import ContactForm from "../../components/HomePage/Form";
import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <div className="homeContainer">
        <SectionPills />
        <Features />
        <HomeMap />
        <ContactForm />
      </div>
    </React.Fragment>
  );
}

export default Home;

import React from "react";
import HomeMap from "../../components/HomePage/Map";
import Features from "../../components/HomePage/Features";
import Interaction from "../../components/HomePage/Interaction";
import SectionPills from "../../components/HomePage/navPills/SectionPills";
import ContactForm from "../../components/HomePage/Form";
import "./Home.css";

function Home() {
  return (
    <div className="homeContainer">
      <React.Fragment>
        <Interaction />
        <SectionPills />
        <Features />
        <HomeMap />
        <ContactForm />
      </React.Fragment>
    </div>
  );
}

export default Home;

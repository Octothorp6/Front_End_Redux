import React from "react";
import HomeMap from "../../components/HomePage/Map";
import Features from "../../components/HomePage/Features";
import Interaction from "../../components/HomePage/Interaction";
import SectionPills from "../../components/HomePage/navPills/SectionPills";
import Form from "../../components/HomePage/Form";
import "./Home.css"

function Home() {
  return (
    <React.Fragment>
      <Interaction />
      <SectionPills />
      <Features />
      <HomeMap />
      <Form />
    </React.Fragment>
  );
}

export default Home;

import React from "react";
import Features from "../Components/Features";
import Hero from "../Components/Hero";
import Listings from "../Components/Listings";
import { InfoData, InfoDataTwo } from "../Data/InfoData";
import { SliderData } from "../Data/SliderData";
import InfoSection from "../Components/InfoSection";

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Listings />
      <Features />
      <InfoSection {...InfoDataTwo} />
    </>
  );
};

export default Home;

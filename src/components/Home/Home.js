import React from "react";
import Services from "../Services/Services";
import WatchShow from "../ShowWatch/ShowWatch";
import Slider from "../Slider/Slider";
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <WatchShow></WatchShow>
      <Services></Services>
    </div>
  );
};

export default Home;

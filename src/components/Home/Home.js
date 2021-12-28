import React from "react";
import Services from "../Services/Services";
import WatchShow from "../ShowWatch/ShowWatch";
import Slider from "../Slider/Slider";
import Blog from "../Blog/Blog"
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <WatchShow></WatchShow>
      <Services></Services>
      <Blog></Blog>
    </div>
  );
};

export default Home;

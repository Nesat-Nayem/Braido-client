import React from "react";
import Blog from "../Blog/Blog";
import Services from "../Services/Services";
import ShowReview from "../ShowReview/ShowReview";
import WatchShow from "../ShowWatch/ShowWatch";
import Slider from "../Slider/Slider";
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <WatchShow></WatchShow>
      <Services></Services>
      {/* <Blog></Blog> */}
      {/* <ShowReview></ShowReview> */}
      
    </div>
  );
};

export default Home;

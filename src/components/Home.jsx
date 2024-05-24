import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";

const Home = () => {
  return (
    <Carousel infiniteLoop>
      <div>
        <img src={image1} alt="" />
      </div>
      <div>
        <img src={image2} alt="" />
      </div>
      <div>
        <img src={image3} alt="" />
      </div>
    </Carousel>
  );
};

export default Home;

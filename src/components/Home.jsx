import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg"

const Home = () => {
  return (
    /**infiniteLoop autoPlay interval={2000} */
    <Carousel infiniteLoop autoPlay interval={2000}>
      <div className="text">
        <img src={image1} alt="" />
        <div>
          <h1>Let's <br /> Explore <br />
          <span>unique</span> <br />clothes </h1>
          <button>Shop Now</button>
        </div>
      </div>
      <div>
        <img src={image2} alt="" />
      </div>
      <div>
        <img src={image3} alt="" />
      </div>
      <div>
        <img src={image4} alt="" />
      </div>
    </Carousel>
  );
};

export default Home;

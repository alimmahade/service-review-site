import React from "react";
import pic from "../../asset/Slider-pic/1.jpg";
import pica from "../../asset/Slider-pic/2.jpg";
import picb from "../../asset/Slider-pic/3.jpg";

const Slider = () => {
  return (
    <div className="carousel w-full rounded-box">
      <div id="slide1" className="carousel-item w-1/2">
        <img src={pica} className="w-full" alt="Nopic" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item w-1/2">
        <img src={picb} className="w-full" alt="Nopic" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item w-1/2">
        <img src={pic} className="w-full" alt="Nopic" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item w-1/2">
        <img src={pica} className="w-full" alt="Nopic" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;

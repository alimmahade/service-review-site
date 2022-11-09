import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import pic from "../asset/photogalary/2.jpg";
import picc from "../asset/photogalary/7.jpg";
import picd from "../asset/photogalary/4.jpg";
import pice from "../asset/photogalary/5.jpg";
import picf from "../asset/photogalary/6.jpg";

export default function ReactPhoto() {
  return (
    <div>
      <h3 className="text-3xl m-4">Our Activities</h3>
      <div className="flex m-4 p-4">
        <PhotoProvider className="m-4 p-4">
          <PhotoView src={pic}>
            <img src={pic} alt="" />
          </PhotoView>

          <PhotoView src={picc}>
            <img src={picc} alt="" />
          </PhotoView>

          <PhotoView src={picd}>
            <img src={picd} alt="" />
          </PhotoView>

          <PhotoView src={pice}>
            <img src={pice} alt="" />
          </PhotoView>

          <PhotoView src={picf}>
            <img src={picf} alt="" />
          </PhotoView>
        </PhotoProvider>
      </div>
    </div>
  );
}

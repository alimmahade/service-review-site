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
      <h3 className="text-3xl m-4 text-white">Our Activities</h3>
      <div className="flex m-2 p-2">
        <PhotoProvider className="m-2 p-2">
          <div className="m-2 p-2">
            <PhotoView src={pic}>
              <img src={pic} alt="" />
            </PhotoView>
          </div>

          <div className="m-2 p-2">
            <PhotoView src={picc}>
              <img src={picc} alt="" />
            </PhotoView>
          </div>

          <div className="m-2 p-2">
            <PhotoView src={picd}>
              <img src={picd} alt="" />
            </PhotoView>
          </div>

          <div className="m-2 p-2">
            <PhotoView src={pice}>
              <img src={pice} alt="" />
            </PhotoView>
          </div>

          <div className="m-2 p-2">
            <PhotoView src={picf}>
              <img src={picf} alt="" />
            </PhotoView>
          </div>
          <div className="m-2 p-2">
            <PhotoView src={picc}>
              <img src={picc} alt="" />
            </PhotoView>
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
}

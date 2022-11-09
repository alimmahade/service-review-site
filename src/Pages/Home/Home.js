import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MoreHealth from "../MoreHealth";
import ReactPhoto from "../ReactPhoto";

import Slider from "../Slider/Slider";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Slider></Slider>
      <div>
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-cyan-300 m-5">
            Medicale Service
          </h2>
          <p>
            The well-known health website has quite a collection of blogs,we
            identified 75 of our favorite medical blogs everyone in the field
            can. but WebMD Doctors stands out for how relatable it is.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <p key={service._id} service={service}>
              <div className="card card-compact w-96 bg-base-100 shadow-xl text-center">
                <figure>
                  <img src={service.pic} alt="nopic" />
                </figure>
                <div className="card-body align-middle">
                  <h2 className="card-title align-middle">{service.name}</h2>
                  <p className="text-2xl text-red-600 font-semibold">
                    Charge: ${service.charge}
                  </p>
                </div>
              </div>
            </p>
          ))}
        </div>
        <Link to="/services">
          <button className="btn btn-secondary">See All</button>
        </Link>
      </div>
      <MoreHealth></MoreHealth>
      <ReactPhoto></ReactPhoto>
    </div>
  );
};

export default Home;

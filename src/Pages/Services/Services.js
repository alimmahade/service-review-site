import React, { useEffect, useState } from "react";
import ServiceCard from "../Service-card/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold">Medical Service</h2>
        <p>
          The well-known health website has quite a collection of blogs,we
          identified 75 of our favorite medical blogs everyone in the field can.
          but WebMD Doctors stands out for how relatable it is. Each post is
          penned by a physician, and the topics can be about parenting, heart
          medication, or how even health professionals struggle with healthy
          eating.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

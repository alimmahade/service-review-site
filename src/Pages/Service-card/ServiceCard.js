import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { pic, name, charge, _id } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <img src={pic} alt="nopic" />
        <h2 className="card-title text-3xl text-cyan-300">{name}</h2>
        <p className="text-2xl text-red-600 font-semibold">Charge: ${charge}</p>
        <Link to={`/servicedetails/${_id}`}>
          <button className="btn btn-secondary">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

import React from "react";

const ServiceCard = ({ service }) => {
  const { pic, name, charge } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={pic} alt="nopic" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-2xl text-orange-600 font-semibold">
          Price: ${charge}
        </p>
        {/* <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>
                    </Link>
                </div> */}
      </div>
    </div>
  );
};

export default ServiceCard;

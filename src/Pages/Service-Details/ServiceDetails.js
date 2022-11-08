import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { name, details, pic, charge } = useLoaderData();
  return (
    <div>
      <figure></figure>
      <div className="card-body align-middle">
        <img src={pic} alt="nopic" />
        <p className="card-title text-4xl text-red-600 font-semibold">
          Service Name: {name}
        </p>
        <p className="text-2xl text-justify">{details}</p>
        <p className="text-2xl text-yellow-500 font-semibold">
          Service Charge: ${charge}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;

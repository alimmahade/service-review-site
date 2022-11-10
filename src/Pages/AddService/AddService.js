import React, { useState } from "react";

const AddService = () => {
  const [service, setService] = useState({});

  const adduser = (event) => {
    event.preventDefault();
    console.log(service);

    fetch("http://localhost:5000/addservice", {
      method: "POST", // or 'PUT'
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((req) => req.json())
      .then((data) => {
        if (data.insertedId) {
          alert("service added succesfully");
        }
        console.log(data);
      });
  };

  const handelBlur = (event) => {
    console.log(event);
    const name = event.target.name;
    const Value = event.target.value;
    console.log(name, Value);
    const newUser = { ...service };
    newUser[name] = Value;
    setService(newUser);
  };

  return (
    <div className="bg-white">
      <form onSubmit={adduser}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input
            onBlur={handelBlur}
            type="text"
            placeholder="service name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Service image</span>
          </label>
          <input
            onBlur={handelBlur}
            type="text"
            placeholder="service img link"
            className="input input-bordered"
            name="img"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Details</span>
          </label>
          <input
            onBlur={handelBlur}
            type="text"
            placeholder="service details"
            className="input input-bordered"
            name="details"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Details</span>
          </label>
          <input
            onBlur={handelBlur}
            type="text"
            placeholder="price"
            className="input input-bordered"
            name="price"
            required
          />
        </div>

        <button className="btn-secondary"> Add service </button>
      </form>
    </div>
  );
};

export default AddService;

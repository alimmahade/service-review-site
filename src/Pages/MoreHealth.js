import React from "react";

const MoreHealth = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-cyan-600">
        <div className="hero-content text-center">
          <div>
            <h2 className="text-4xl font-semibold border-r-4 text-secondary bg-white ">
              More Service
            </h2>
          </div>
          <div className="card w-96 bg-slate-500 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4006/4006298.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary text-4xl">
                Stomach Decease
              </h2>
              <p>
                Neurology is the branch of medicine concerned with the study and
                treatment of disorders of the nervous system. The nervous system
                is a complex,
              </p>
              <button className="btn btn-secondary">Read More</button>
            </div>
          </div>
          <div className="max-w-md">
            <div className="card w-96 bg-slate-500 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4006/4006298.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-4xl text-secondary">
                  Gastrology
                </h2>
                <p>
                  Neurology is the branch of medicine concerned with the study
                  and treatment of disorders of the nervous system. The nervous
                  system is a complex,
                </p>
                <button className="btn btn-secondary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreHealth;

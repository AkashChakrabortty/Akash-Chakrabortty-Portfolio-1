import React from "react";
import img from "./own.jpg";
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200" id="home">
      <div className="lg:w-3/5 mx-auto">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={img}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Akash Chakrabortty"
        />
        <div>
          <h1 className="lg:text-5xl text-2xl font-bold">Akash Chakrabortty</h1>
          <div className="text-gray-500 text-2xl uppercase flex flex-col justify-around mt-2">
          
            <div className="overflow-hidden h-14">
              <div className="animate-slide">
                <span className="inline-block text-white py-1 px-3  mt-1 mb-11 bg-blue-500">
                Frontend Developer
                </span>
              </div>
              <div>
                <span className="inline-block text-white py-1 px-3  mb-11 bg-green-500">
                Fullstack Developer
                </span>
              </div>
              <div>
                <span className="inline-block text-white py-1 px-3  mb-11 bg-red-500">
                Problem Solver
                </span>
              </div>
            </div>
          
          </div>
          <div className="lg:w-3/4">
          <p className="mb-2 text-xl text-justify">
            Hello! I am Akash Chakrabortty, a professional and passionate
            developer. A quick learner with a self-learning attitude. I love to
            explore new technologies.
          </p>
          </div>
          <button className="btn btn-primary ">Download Resume</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;

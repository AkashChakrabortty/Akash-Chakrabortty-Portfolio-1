import React from "react";
import jsfun from './js fun project.png';
const Project = () => {
  return (
    <div id="project">
      <h1 className="lg:text-5xl text-4xl font-bold text-center">Project</h1>
      <div className="lg:flex justify-evenly w-3/4 mx-auto mt-4">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img src={jsfun} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">TicTacToe</h2>
            <h3 className="text-xl">This is a simple JavaScript fun project.</h3>
            <p className="text-xl"> <span className="font-bold">Using:</span> HTML CSS JavaScript  </p>
            <div className="card-actions justify-evenly">
              <button className="btn btn-primary">Live link</button>
              <button className="btn btn-primary">Repository link</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

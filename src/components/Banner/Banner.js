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
            <h1 className="lg:text-5xl text-2xl font-bold">
              Akash Chakrabortty
            </h1>
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
                developer. A quick learner with a self-learning attitude. I love
                to explore new technologies.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1Hcp7-XN6RtcooiDJVrsAG-oCktg-yI7X/view"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button className="btn btn-primary">Download Resume</button>
            </a>
            <div className="social-link w-1/4 flex justify-evenly mt-3">
              <div className="github">
                <a
                  href="https://github.com/AkashChakrabortty"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-2"></i>
                </a>
              </div>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/akash-chakrabortty-dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-linkedin-in rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

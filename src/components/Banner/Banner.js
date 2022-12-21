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
                  className="m-2 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full border-2 border-gray-700 bg-white text-gray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              <div className="linkedin">
                  <a
                    href="https://www.linkedin.com/in/akash-chakrabortty-dev/"
                    target="_blank"
                    rel="noreferrer"
                    className="m-2 w-10 h-10 inline-flex justify-center items-center shadow-sm rounded-full border-2 border-[#0E76A8] bg-white text-[#0E76A8]"
                    style={{ borderColor: "#0E76A8", color: "#0E76A8" }}
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
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

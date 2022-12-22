import React from "react";
import jsfun from './js fun project.png';
import chitchat from './Screenshot_1.png';
import Photographer from './Screenshot_2.png';
import buySell from './Screenshot_3.png';
const Project = () => {
  return (
    <div id="project">
      <h1 className="lg:text-5xl text-4xl font-bold text-center">Project</h1>
      <div className="flex justify-center w-full py-2 gap-2 mx-auto">
        <a href="#FullStack" className="btn btn-xs">
          Full Stack
        </a>
        <a href="#FunProject" className="btn btn-xs">
          Fun Project
        </a>
      </div>
      <div className="carousel w-full">
        <div
          id="FullStack"
          className="carousel-item w-full grid grid-cols-1	lg:grid-cols-3"
        >
          <div className="chitchat lg:flex justify-evenly w-3/4 mx-auto mt-4">
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
              <figure>
                <img src={chitchat} alt="Shoes" className="h-96	" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">ChitChat</h2>
                <h3 className="text-xl">
                  This is a Full Stack project. <br />
                  Key Features: <br />
                  * Login & Create account & password reset <br />* Show all
                  friends and their posts and give like or comments <br />
                  * Communicate friends by sending text <br />* Profile edit ,
                  show user interaction(Like & comments)
                </h3>
                <p className="text-xl">
                  {" "}
                  <span className="font-bold">Using:</span> Bootstrap React
                  Express MongoDB{" "}
                </p>
                <div className="card-actions justify-evenly">
                  <button className="btn btn-primary">
                    <a
                      href="https://chitchat-771c4.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      href="https://github.com/AkashChakrabortty/ChitChat"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      href="https://github.com/AkashChakrabortty/ChitChat-server"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="Buy-Sell lg:flex justify-evenly w-3/4 mx-auto mt-4">
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
              <figure>
                <img src={buySell} alt="Shoes" className="h-96	" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">Buy-Sell</h2>
                <h3 className="text-xl">
                  This is a Full Stack project. <br />
                  Key Features: <br />
                  * Admin feature <br />
                  * Seller feature
                  <br />
                  * Buyer feature <br />
                  * Advertisement product <br />
                  * Booking product <br />* Authentication
                </h3>
                <p className="text-xl">
                  {" "}
                  <span className="font-bold">Using:</span> Bootstrap React
                  Express MongoDB{" "}
                </p>
                <div className="card-actions justify-evenly">
                  <button className="btn btn-primary">
                    <a
                      href="https://buy-sell-6f50b.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      href="https://github.com/AkashChakrabortty/Buy-Sell"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      href="https://github.com/AkashChakrabortty/Buy-Sell-Server"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="Photographer lg:flex justify-evenly w-3/4 mx-auto mt-4">
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
              <figure>
                <img src={Photographer} alt="Shoes" className="h-96	" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">Photographer</h2>
                <h3 className="text-xl">
                  This is a Full Stack project. <br />
                  Key Features: <br />
                  * Gmail and Email password login <br />
                  * Give review <br />
                  * Show others user review <br />
                  * Add review <br />* Edit & Delete review
                </h3>
                <p className="text-xl">
                  {" "}
                  <span className="font-bold">Using:</span> Bootstrap React
                  Express MongoDB{" "}
                </p>
                <div className="card-actions justify-evenly">
                  <button className="btn btn-primary">
                    <a
                      href="https://photographer1-6b6ff.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      href="https://github.com/AkashChakrabortty/Photographer-client"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      href="https://github.com/AkashChakrabortty/Photographer-Server"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="FunProject" className="carousel-item w-full">
          <div className="lg:flex justify-evenly w-3/4 mx-auto mt-4">
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
              <figure>
                <img src={jsfun} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">TicTacToe</h2>
                <h3 className="text-xl">
                  This is a simple JavaScript fun project.
                </h3>
                <p className="text-xl">
                  {" "}
                  <span className="font-bold">Using:</span> HTML CSS JavaScript{" "}
                </p>
                <div className="card-actions justify-evenly">
                  <button className="btn btn-primary">
                    <a
                      href="https://akashchakrabortty.github.io/TicTacToe/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live link
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      href="https://github.com/AkashChakrabortty/TicTacToe"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repository link
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

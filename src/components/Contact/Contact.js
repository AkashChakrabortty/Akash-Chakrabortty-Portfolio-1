import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="hero min-h-screen bg-base-200">
        <div className="w-full lg:w-5/6 mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <h1 className="lg:text-5xl text-4xl font-bold text-center">
              Contact Me
            </h1>
            <div className="w-full">
              <div className="form-control">
              <label className="label w-3/4 mx-auto">
                  <span className="label-text  text-2xl ">Your Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-3/4 mx-auto text-xl p-2"
                  />
                </label>

              <label className="label w-3/4 mx-auto">
                  <span className="label-text text-2xl">Your Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    placeholder="email@gmail.com"
                    className="input input-bordered w-3/4 mx-auto text-xl"
                  />
                </label>

                <label className="label w-3/4 mx-auto">
                  <span className="text-2xl">Your Message</span>
                </label>
                <label className="input-group">
                <textarea className="textarea textarea-success w-3/4 mx-auto text-xl" placeholder="Type Your message"></textarea>
                </label>
                <button className="btn btn-primary w-48 mx-auto mt-2">Send me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

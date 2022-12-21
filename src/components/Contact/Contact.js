import React from "react";
const Contact = () => {
  // const [toSend,setToSend] = useState({})
  // const form = useRef();
  // const handleForm = (event)=> {
  //  event.preventDefault();
  // //  const name = event.target.name.value;
  // //  const email = event.target.email.value;
  // //  const text = event.target.text.value;

  // //  const info = {
  // //    Name: name,
  // //    Message: email,
  // //    Email: text,
  // //  };
  // //  setToSend(info);

  // emailjs
  //   .sendForm(
  //     "service_ghuwo95",
  //     "template_n267ybb",
  //     form.current,
  //     "YOUR_PUBLIC_KEY"
  //   )
  //   .then(
  //     (result) => {
  //      alert(result.text);
  //     },
  //     (error) => {
  //       alert(error.text);
  //     }
  //   );

  // }
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
                <form action="https://formspree.io/f/mbjerkpp" method="POST">
                  <label className="label w-3/4 mx-auto">
                    <span className="label-text  text-2xl ">Your Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="name"
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
                      name="email"
                      placeholder="email@gmail.com"
                      className="input input-bordered w-3/4 mx-auto text-xl"
                    />
                  </label>

                  <label className="label w-3/4 mx-auto">
                    <span className="text-2xl">Your Message</span>
                  </label>
                  <label className="input-group">
                    <textarea
                      name="text"
                      className="textarea textarea-success w-3/4 mx-auto text-xl h-48"
                      placeholder="Type Your message"
                    ></textarea>
                  </label>
                  <div className="text-center">
                    <button
                      className="btn btn-primary w-48 mx-auto mt-2"
                      type="submit"
                    >
                      Send me
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

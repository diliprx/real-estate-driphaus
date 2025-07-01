import React from "react";
import { toast } from "react-toastify";

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d96eeb61-e24a-4d09-8b68-7a42bb4495f2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",

      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult(""); 
    }
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact <span className="text-gray-500">With Us</span>
      </h1>
      <p className="text-center text-gray-700 mb-12 max-w-80 mx-auto">
        {" "}
        Ready to Build Your Dream!
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left ">
            Your Name
            <input
              type="text" name='Name'
              placeholder="Enter your name"
              className="w-full py-3 rounded  border border-gray-300 px-4 mt-2  mb-4"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4 ">
            Your Email
            <input
              type="email" name='email'
              placeholder="Enter your email"
              className="w-full py-3 rounded  border border-gray-300 px-4 mt-2  mb-4"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
            Your Message
            <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name="Message" placeholder="Message" required></textarea>
        </div>
        <button type="sumbit" className="bg-emerald-500 text-white py-2 px-12 mb-10 rounded">{result ? result : "Send Message"}</button>

      </form>
    </div>
  );
};

export default Contact;

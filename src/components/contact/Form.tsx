import React, { useState } from "react";

interface formStates {
  name: String;
  email: String;
  message: String;
}

const Form: React.FC = () => {
  const [name, setName] = useState<String>();
  const [email, setEmail] = useState<String>();
  const [message, setMessage] = useState<String>();
  const [emailError, setEmailError] = useState<string | null>(null);
  //   email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    setEmailError(isValid ? null : "Enter a valid email address");
    console.log(emailError);
  };
  //   send function

  const handelClick = () => {
    console.log(name, email, message);
  };
  return (
    <div className="p-5 primary_font_400 ">
      <form action="" className="w-full">
        <div className="flex flex-col py-3">
          <label htmlFor="name">Name</label>
          <input
            className="focus-visible:outline-none bg-zinc-700 rounded-sm px-1 py-[2px]"
            type="text"
            placeholder="Your Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col py-3">
          <label htmlFor="email">Email</label>
          <input
            className="focus-visible:outline-none bg-zinc-700 rounded-sm px-1 py-[2px]"
            type="email"
            placeholder="xyz@adc.com"
            onChange={(e) => {
              validateEmail(e.target.value);
              setEmail(e.target.value);
            }}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </div>

        <div className="flex flex-col py-3">
          <label htmlFor="message">Message</label>
          <textarea
            className="focus-visible:outline-none bg-zinc-700 rounded-sm px-1 py-[2px]"
            name=""
            id=""
            placeholder="message..."
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
      </form>

      <div className="w-full flex justify-end  ">
        {/* <button onClick={handelClick} className="w-[100px] border-2">
          Send
        </button> */}

        <a
          href="#_"
          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-[1px] border-zinc-500 drop-shadow-[0_35px_35px_rgba(235, 234, 232, 0.8)] rounded-full shadow-md group"
          onClick={() => {
            handelClick();
          }}
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-zinc-950 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full  transition-all duration-300 transform group-hover:translate-x-full ease">
            Send Message
          </span>
          <span className="relative invisible">Send Message</span>
        </a>
      </div>
    </div>
  );
};

export default Form;

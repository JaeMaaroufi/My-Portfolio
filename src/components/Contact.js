import React, { useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [inputName, setInputName] = useState("");
  const [state, handleSubmit] = useForm("xleqaqzv");
  const textareaRef = useRef(null);
  if (state.succeeded) {
    return (
      <div className="h-full bg-zinc-200 py-10">
        <h1 className="text-3xl text-center pb-10">🌟 Message Sent! 🌟</h1>
        <p className="text-justify px-5 md:px-16 lg:px-[30rem] text-lg">
          Thank you so much, <span className="text-[#8b58f1]">{inputName}</span>
          ! Truly, I appreciate your message. It has been successfully sent and
          received. I am thrilled to hear from you and eager to respond
          promptly. Your interest means a lot to me, and I'm looking forward to
          connecting with you soon!
        </p>
      </div>
    );
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };
  const handleName = (event) => {
    setInputName(event.target.value);
  };
  return (
    <div
      id="contact-page"
      className="bg-zinc-200 flex flex-col justify-center items-center h-screen"
    >
      <h1
        className="text-zinc-900 font-mukta-regular font-bold tracking-widest border-x-4 border-x-zinc-900 text-xl px-12 py-4 mb-12 md:px-20 lg:px-20 lg:mt-24 lg:mb-20 lg:py-6 lg:text-2xl"
        data-aos="fade-down"
      >
        CONTACT ME
      </h1>
      <p
        className="font-mukta-regular font-light text-justify text-sm px-8 mb-8 lg:mb-10 lg:text-lg lg:px-96"
        data-aos="fade-right"
      >
        Got a project in mind, or just want to chat? Don't hesitate to reach
        out! I'm always here to lend an ear, brainstorm ideas, or collaborate on
        exciting projects. Feel free to drop me a line—I'd love to hear from
        you!
      </p>
      <form className="w-[80%] lg:w-1/2" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-zinc-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="YOUR NAME"
            onChange={handleName}
            value={inputName}
            className="bg-zinc-200 w-full py-2 px-3 text-zinc-700 outline-none transition duration-500 border-zinc-200 focus:border-black border-l-4 border-b-4 placeholder:text-sm"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="my-4">
          <label className="block text-zinc-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="YOUR EMAIL"
            className="bg-zinc-200 w-full py-2 px-3 text-zinc-700 outline-none transition duration-500 border-zinc-200 focus:border-black border-l-4 border-b-4 placeholder:text-sm"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-6 mt-4">
          <label
            className="block text-zinc-700 font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            ref={textareaRef}
            name="message"
            id="message"
            placeholder="YOUR MESSAGE"
            value={message}
            onChange={handleChange}
            className="bg-zinc-200 w-full py-2 px-3 text-zinc-700 outline-none transition duration-500 border-zinc-200 focus:border-black border-l-4 border-b-4 placeholder:text-sm resize-none"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="text-sm text-zinc-900 font-bold py-2 px-4 my-5 border-zinc-900 border-x-4 outline-none w-[70%] md:w-1/2 lg:w-[30%] lg:mb-10 lg:mt-6 transition-all duration-300 transform hover:scale-110 cursor-pointer"
          >
            S U B M I T
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

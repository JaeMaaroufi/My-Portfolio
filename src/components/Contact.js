import React, { useState, useRef } from "react";
const Contact = () => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (event) => {
    setMessage(event.target.value);
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <div className="bg-zinc-200 flex flex-col justify-center items-center h-screen">
      <h1 className="font-mukta-regular tracking-widest border-x-4 border-x-gray-900 text-2xl font-bold px-16 py-4">
        CONTACT ME
      </h1>
      <form className="w-1/2">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            placeholder="YOUR NAME"
            className="bg-zinc-200 w-full py-2 px-3 text-gray-700 outline-none transition duration-500 border-zinc-200 focus:border-black border-l-4 border-b-4 placeholder:text-sm"
            required
          />
        </div>
        <div className="my-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            placeholder="YOUR EMAIL"
            className="bg-zinc-200 w-full py-2 px-3 text-gray-700 outline-none transition duration-500 border-zinc-200 focus:border-black border-l-4 border-b-4 placeholder:text-sm"
            required
          />
        </div>
        <div className="mb-6 mt-4">
          <label className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            ref={textareaRef}
            name="message"
            placeholder="YOUR MESSAGE"
            value={message}
            onChange={handleChange}
            className="bg-zinc-200 w-full py-2 px-3 text-gray-700 outline-none transition duration-500 border-zinc-200 focus:border-black border-l-4 border-b-4 placeholder:text-sm resize-none"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-sm font-bold py-2 px-4 mb-5 border-black border-x-4 outline-none w-1/3"
          >
            S U B M I T
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

import { useRef, useEffect, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    emailjs.init("6yjs3dXYxJ_QEUnxd"); // public key
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b90m55f", // serviceId
        "template_w4glrpj", // templateId
        form.current,
        "6yjs3dXYxJ_QEUnxd"
      )
      .then(
        () => {
          Swal.fire({
            title: "Success",
            text: "Message sent successfully!",
            icon: "success",
          });
          form.current.reset();
        },
        () => {
          Swal.fire({
            title: "Error",
            text: "Could not send message. Please try again later.",
            icon: "error",
          });
        }
      );
  };

  return (
    <div
      className={`isolate bg-purple-50 px-3 sm:py-24 transition-all duration-700 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {/* --- Header --- */}
      <div
        className={`mx-auto max-w-2xl text-center transition-all duration-700 delay-100
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Get in touch
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* --- Formulaire --- */}
      <form
        ref={form}
        onSubmit={onSubmit}
        className={` mx-auto mt-16 max-w-xl sm:mt-20 sm:p-6 p-3 rounded-2xl  transition-all duration-700 delay-200
      `}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
              First name*
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
              border border-gray-300 placeholder:text-gray-400
              focus:border-purple-600 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.2)] 
              transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
              Last name*
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
              border border-gray-300 placeholder:text-gray-400
              focus:border-purple-600 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.2)] 
              transition-all duration-300"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
              border border-gray-300 placeholder:text-gray-400
              focus:border-purple-600 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.2)] 
              transition-all duration-300"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-900">
              Subject*
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
              border border-gray-300 placeholder:text-gray-400
              focus:border-purple-600 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.2)] 
              transition-all duration-300"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
              border border-gray-300 placeholder:text-gray-400
              focus:border-purple-600 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.2)] 
              transition-all duration-300"
            />
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-purple-600 px-3.5 py-2.5 text-center 
            text-sm font-semibold text-white shadow-md hover:bg-purple-500 
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600
            transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}

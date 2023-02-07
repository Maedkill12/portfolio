import React, { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLanguage from "../hooks/useLanguage";
import useSocialMedia from "../hooks/useSocialMedia";

const toastOptions = {
  position: "bottom-left",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const Contact = () => {
  const [sendingEmail, setSendingEmail] = useState(false);
  const { lang } = useLanguage();
  const socialMedia = useSocialMedia();
  const form = useRef();

  const handleSubmit = async (e) => {
    setSendingEmail(true);
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_dd8quvl",
        "template_48g5we4",
        form.current,
        "JbkqNf_m39oVj_Mdh"
      );
      toast.success(lang.emailSuccess, toastOptions);
      form.current.reset();
    } catch (error) {
      toast.error(lang.emailError, toastOptions);
    } finally {
      setSendingEmail(false);
    }
  };

  return (
    <>
      <div className="relative flex h-full min-h-screen w-full flex-col items-center py-8 lg:flex-row lg:py-0">
        <div className="relative z-10 flex h-[500px] w-10/12 flex-1 flex-col justify-center px-4 lg:w-auto">
          <h2 className="text-center text-6xl font-bold text-orange-500">
            {lang.contact}
          </h2>
          <form
            className="flex h-[400px] w-full flex-col items-center gap-4"
            onSubmit={handleSubmit}
            ref={form}
          >
            <div className="flex w-10/12 flex-col justify-center gap-4 lg:flex-row lg:gap-2">
              <input
                type="text"
                placeholder={lang.namePlaceholder}
                name="name"
                className="w-full border-b-4 border-transparent bg-gray-800 py-4 px-2 text-xl shadow-lg shadow-black outline-none focus:border-solid focus:border-orange-500"
                required
              />
              <input
                type="email"
                placeholder={lang.emailPlaceholder}
                name="email"
                className="w-full border-b-4 border-transparent bg-gray-800 py-4 px-2 text-xl shadow-lg shadow-black outline-none focus:border-solid focus:border-orange-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder={lang.subjectPlaceholder}
              name="subject"
              className="w-10/12 border-b-4 border-transparent bg-gray-800 py-4 px-2 text-xl shadow-lg shadow-black outline-none focus:border-solid focus:border-orange-500"
              required
            />
            <textarea
              className="h-full max-h-full w-10/12 border-b-4 border-transparent bg-gray-800 py-4 px-2 text-xl shadow-lg shadow-black outline-none focus:border-solid focus:border-orange-500"
              name="message"
              placeholder={lang.messagePlaceholder}
              required
            ></textarea>
            <button
              type="submit"
              disabled={sendingEmail}
              className={`mt-4 w-10/12 rounded-2xl border border-solid border-orange-500 bg-orange-500 py-2 px-4 text-lg shadow-lg shadow-black hover:bg-orange-500 disabled:opacity-70  ${
                sendingEmail && "cursor-not-allowed"
              }`}
            >
              {lang.send}
            </button>
          </form>
        </div>
        <div className="relative z-10 mt-20 flex h-[500px] w-10/12 flex-1 flex-col justify-center px-4 lg:mt-0 lg:w-auto">
          <h2 className="text-center text-6xl font-bold text-orange-500">
            {lang.getInTouch}
          </h2>
          <div className="h-[400px]">
            <div className="flex h-full flex-1 flex-col gap-12">
              {socialMedia.map((item) => (
                <a
                  className="text-3xl hover:text-orange-500"
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="flex flex-row items-center gap-2 text-2xl">
                    {item.icon} {item.name}
                  </p>
                </a>
              ))}
              <p className="flex flex-row items-center gap-2 text-2xl">
                <MdEmail /> maed012014@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div
          className={`white__gradient absolute top-0 left-0 right-0 bottom-0 z-0 m-auto h-[600px] w-[600px] overflow-hidden rounded-full`}
        />
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;

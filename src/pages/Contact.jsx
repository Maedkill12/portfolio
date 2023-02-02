import React from "react";
import { MdEmail } from "react-icons/md";
import useLanguage from "../hooks/useLanguage";
import useSocialMedia from "../hooks/useSocialMedia";

const Contact = () => {
  const { lang } = useLanguage();
  const socialMedia = useSocialMedia();
  return (
    <div className="relative flex h-full min-h-screen w-full flex-row items-center">
      <div className="relative z-10 flex h-[500px] flex-1 flex-col justify-center px-4">
        <h2 className="text-center text-6xl font-bold text-orange-500">
          {lang.contact}
        </h2>
        <form
          className="flex h-[400px] w-full flex-col items-center gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex w-10/12 flex-row justify-center gap-2">
            <input
              type="text"
              placeholder={lang.namePlaceholder}
              name="name"
              className="flex-1 border-b-4 border-transparent bg-gray-800 py-4 px-2 text-xl shadow-lg shadow-black outline-none focus:border-solid focus:border-orange-500"
            />
            <input
              type="email"
              placeholder={lang.emailPlaceholder}
              name="email"
              className="flex-1 border-b-4 border-transparent bg-gray-800 py-4 px-2 text-xl shadow-lg shadow-black outline-none focus:border-solid focus:border-orange-500"
            />
          </div>
          <input
            type="text"
            placeholder={lang.subjectPlaceholder}
            name="subject"
            className="w-10/12 border-b-4 border-transparent bg-gray-800 py-4 px-2 text-xl shadow-lg shadow-black outline-none focus:border-solid focus:border-orange-500"
          />
          <textarea
            className="h-full max-h-full w-10/12 border-b-4 border-transparent bg-gray-800 py-4 px-2 text-xl shadow-lg shadow-black outline-none focus:border-solid focus:border-orange-500"
            placeholder={lang.messagePlaceholder}
          ></textarea>
          <button
            type="submit"
            className="rounded-2xl border border-solid border-orange-500 py-2 px-4 text-lg shadow-lg shadow-black hover:bg-orange-500"
          >
            {lang.send}
          </button>
        </form>
      </div>
      <div className="relative z-10 flex h-[500px] flex-1 flex-col justify-center px-4">
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
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";
import photo from "../assets/photo.webp";
import f1 from "../assets/zacatecas.jpg";
import useLanguage from "../hooks/useLanguage";

const Home = () => {
  const { lang } = useLanguage();

  return (
    <div className="flex h-screen flex-row overflow-hidden">
      <div className="relative z-0 mt-40 flex flex-1 items-center pl-4 sm:mt-0">
        <div>
          <div className="my-8 border-l border-orange-500 pl-8">
            <h2 className="my-2 text-5xl font-bold sm:text-6xl xl:text-7xl">
              {lang.greet}, <br />
              {lang.pronoun} Alejandro Elias
            </h2>
            <span className="text-lg text-orange-500">{lang.area}</span>
          </div>
          <div className="pl-8">
            <Link
              to="/contact"
              className="rounded-2xl border border-solid border-orange-500 py-2 px-4 text-lg hover:bg-orange-500"
            >
              {lang.contact}
            </Link>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex-1 overflow-visible">
        <div
          className={`absolute -top-[500px] -right-[20vw] z-10 h-[900px]  w-[900px] overflow-hidden rounded-full bg-orange-900 xl:h-[1000px] xl:w-[1000px]`}
        >
          <img
            src={f1}
            alt="Zacatecas"
            className="absolute h-full w-full object-cover blur-sm"
          />
          <img
            src={photo}
            alt="Alejandro Elias"
            className="absolute right-[25%] bottom-0 w-1/2 "
          />
        </div>
        <div
          className={`white__gradient absolute -top-[500px] z-0  h-[1000px] w-[1000px] overflow-hidden rounded-full`}
        />
        <div
          className={`absolute bottom-20 z-10 flex h-[200px]  w-[200px] items-center justify-center overflow-hidden rounded-full bg-orange-600 sm:h-[300px] sm:w-[300px] md:bottom-10`}
        >
          <p className="w-8/12 text-center sm:text-2xl">{lang.slogan}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

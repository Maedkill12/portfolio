import React from "react";
import photo from "../assets/photo.webp";
import f1 from "../assets/zacatecas.jpg";

const Home = () => {
  return (
    <div className="flex h-screen flex-row">
      <div className=" relative z-0 flex flex-1 items-center pl-4">
        <div>
          <div className="my-8 border-l border-orange-500 pl-8">
            <h2 className="my-2 text-7xl font-bold">
              Hi, <br />
              I'm Alejandro Elias
            </h2>
            <span className="text-lg text-orange-500">Fullstack developer</span>
          </div>
          <div className="pl-8">
            <button className="rounded-2xl border border-solid border-orange-500 py-2 px-4 text-lg hover:bg-orange-500">
              Contact me!
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex-1 overflow-visible">
        <div
          className={` absolute -top-[500px] z-10 h-[1000px]  w-[1000px] overflow-hidden rounded-full bg-orange-900`}
        >
          <img
            src={f1}
            alt="Zacatecas"
            className="absolute h-full w-full object-cover blur-sm"
          />
          <img
            src={photo}
            alt="Me"
            className="absolute right-[50%] bottom-0 w-1/3"
          />
        </div>
        <div
          className={`white__gradient absolute -top-[500px] z-0  h-[1000px] w-[1000px] overflow-hidden rounded-full`}
        />
        <div
          className={`absolute bottom-10 z-10  flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-full bg-orange-600`}
        >
          <p className="w-8/12 text-center text-2xl">
            Innovative, Passionate, Experienced Web Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

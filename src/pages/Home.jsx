import React from "react";

const Home = () => {
  return (
    <div className="flex h-screen flex-row">
      <div className="flex flex-1 items-center pl-4">
        <div>
          <h2 className="text-4xl font-bold">Alejandro Elias</h2>
          <span>Fullstack developer</span>
          <div>
            <button className="rounded-2xl border border-solid border-orange-500 py-2 px-4 hover:bg-orange-500">
              Contact me!
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Home;

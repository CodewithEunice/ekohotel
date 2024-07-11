import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      className=" w-full h-[calc(100vh-80px)] mt-[40px] pt-[90px] 
      bg-hero bg-no-repeat
     bg-cover"
    >
      <div className=" container">
        <h1 className=" text-5xl font-bold leading-tight text-white">
          WELCOME TO EKO HOTELS
          <br className="hidden md:block" /> AND SUITES{" "}
        </h1>

        <div className="mt-7 flex items-center flex-col gap-5">
          <button
            className=" px-10 py-2 font-bold 
             cursor-pointer text-white
           bg-accent-500"
          >
            CHECK AVAILABILITY
          </button>
          <div>
            <label className=" text-white flex items-center font-bold ">
              ARRIVAL DATE
            </label>
            <input type="text" className=" cursor-pointer px-2" />{" "}
          </div>
          <div>
            <label className=" flex text-white md:static items-center font-bold ">
              DEPARTURE DATE
            </label>
            <input type="text" className=" cursor-pointer px-2" />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

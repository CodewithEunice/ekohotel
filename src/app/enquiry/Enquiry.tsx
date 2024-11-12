"use client";
import React, { useState } from "react";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Roboto } from "next/font/google";
const Enquiry = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <section className="w-full h-[100px] md:h-[240px] bg-secondary-300">
      <div className=" container">
        <div className="flex items-center pt-8 justify-center">
          <div className=" pl-16 pr-2 border-none ">
            <h4 className="  text-secondary-200 ml-8 ">Arrival Date</h4>
            <DatePicker
              placeholderText="Arrival Date"
              className=" bg-secondary-300 border-none opacity-50 text-3xl "
              isClearable
              minDate={new Date()}
              selected={startDate}
              date={DatePicker}
              dateFormat="Pp"
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className=" border-none ">
            <h4 className=" text-secondary-200 ml-4 ">Departure Date</h4>
            <DatePicker
              placeholderText="Dept Date"
              className=" bg-secondary-300 opacity-50 text-3xl "
              isClearable
              minDate={new Date()}
              selected={endDate}
              dateFormat="Pp"
              onChange={(date) => setEndDate(date)}
            />
          </div>

          <div className="text-slate-700 pr-42 flex-col flex uppercase">
            <label htmlFor="adults" className="text-secondary-200 pl-10">
              ADULTS
            </label>
            <select
              name="Choose Adults"
              id="adults"
              className=" bg-secondary-300 text-xl pt-2 text-left text-white px-1 w-[180px]"
            >
              <option
                value=""
                disabled
                selected
                hidden
                color="#043040"
                className=" text-3xl"
              >
                Choose Adults
              </option>
              <option
                value="1 Adult"
                className=" bg-white text-secondary-300 hover:text-secondary-200"
              >
                1 Adult
              </option>
              <option
                value="2 Adults"
                className=" bg-white text-secondary-300 hover:text-secondary-200"
              >
                2 Adults
              </option>
              <option
                value="3 Adults"
                className=" bg-white text-secondary-300 hover:text-secondary-200"
              >
                3 Adults
              </option>
            </select>
          </div>
          <div className=" for">
            <div className="text-slate-700 pr-18 pl-20 flex-col flex uppercase">
              <label htmlFor="children" className="pb-2 text-secondary-200">
                CHILDREN
              </label>
              <select
                name="o Child"
                id="0 child"
                className=" pt-2 px-1 text-xl bg-secondary-300 cursor-pointer  text-white w-[150px]"
              >
                <option value="" disabled selected hidden color="#043040">
                  0 Child
                </option>
                <option
                  value="1 child"
                  className=" bg-white text-secondary-300 hover:text-secondary-200"
                >
                  1 Child
                </option>
                <option
                  value="2 children"
                  className=" bg-white text-secondary-300 hover:text-secondary-200"
                >
                  2 Children
                </option>
                <option
                  value="3 children"
                  className=" bg-white text-secondary-300 hover:text-secondary-200"
                >
                  3 Children
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className=" flex items-center pt-7 md:pt-12 justify-center">
          <Link href="#">
            <button
              className="p-3 px-5 font-bold
             cursor-pointer text-white hover:text-secondary-100
            bg-secondary-200 text-sm"
            >
              CHECK AVAILABILITY
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;

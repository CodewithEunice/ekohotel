"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { title } from "process";
import { link } from "fs";
import { DiSnapSvg } from "react-icons/di";

const itemStyles = "hover:text-accent-300 transition-all duration-300";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      title: "HOME",
      path: "#",
    },
    {
      id: 2,
      title: "DINING",
      path: "#",
    },
    {
      id: 3,
      title: "MEETINGS",
      path: "#",
    },
    {
      id: 4,
      title: "GALLERY",
      path: "#",
    },
    {
      id: 5,
      title: "BLOG",
      path: "#",
    },
    {
      id: 6,
      title: "CONTACT US",
      path: "#",
    },
  ];

  return (
    <header
      className="w-full h-[80px] flex items-center fixed bg-white
     text-secondary-100 py-5 font-semibold"
    >
      <div className="container justify-between flex items-center">
        <div>
          <Image
            width={240}
            height={40}
            src="/images/logoGraphic.png"
            alt="Logo"
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="block md:hidden cursor-pointer z-10"
        >
          {open ? (
            <IoIosClose size={30} color="white" />
          ) : (
            <RxHamburgerMenu size={30} color="#022D58" />
          )}
        </div>

        <nav
          className={` ${
            open ? "right-0" : "right-[-100%]"
          } w-[70%] md:w-auto absolute top-0 
          h-screen md:static md:h-auto 
        md:bg-transparent flex items-center duration-500 ease-in
         bg-secondary-100 px-5 md:px-0`}
        >
          <ul
            className={` flex flex-col text-white font-extrabold 
            md:font-semibold md:text-secondary-100
          md:flex-row gap-6`}
          >
            {links.map((link) => (
              <li onClick={() => setOpen(false)} key={link.id}>
                <Link href={link.path} className={`${itemStyles} font-serif`}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className=" hidden md:flex px-5 justify-center items-center gap-6">
            <Link href="#" className={`${itemStyles} font-serif `}>
              ABOUT US
            </Link>
            <button
              className="font-bold px-10 py-2 rounded-full
             text-white bg-secondary-100 hover:opacity-70 cursor-pointer"
            >
              Book now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

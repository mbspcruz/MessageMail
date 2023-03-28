import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { animateScroll as scroll } from "react-scroll";
import { menu, close, logo, sm_logo } from "../assets";
import { ButtonForm } from ".";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20  border border-b-2 border-gray-100 bg-white md:px-32 px-8">
      <div className="flex justify-between items-center mx-auto w-full">
        <img
          src={sm_logo}
          className="lg:hidden w-10 object-contain cursor-pointer transition"
          onClick={() => {
            setActive("");
            scroll.scrollTo(0, 0);
          }}
        ></img>
        <img
          src={logo}
          className="hidden lg:block w-52 object-contain cursor-pointer transition"
          onClick={() => {
            setActive("");
            scroll.scrollTo(0, 0);
          }}
        ></img>

        <ul className="list-none hidden md:flex flex-row gap-10 font-nunito text-white items-center ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              href={nav.id}
              className={`${
                active === nav.title
                  ? "text-primary-500 font-bold"
                  : "text-black font-semibold"
              } hover:text-primary-100 cursor-pointer`}
              onClick={() => {
                setActive(nav.title);
              }}
            >
              <Link to={`#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
          <ButtonForm />
        </ul>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-10 h-10 object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white absolute top-20 right-0 w-1/2 z-10 h-screen`}
          >
            <ul className="list-none flex justify-start items-start flex-1 flex-col gap-10 font-nunito font-semi-bold text-white">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title
                      ? "text-primary-500 font-bold"
                      : "text-black font-semibold"
                  } hover:text-primary-100 cursor-pointer`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link to={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
              <ButtonForm />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

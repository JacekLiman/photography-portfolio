import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav>
      <button
        onClick={() => setIsNavOpen(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </button>
      <div
        className={`${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }  flex items-center justify-center absolute top-0 right-0 bg-white shadow-2xl z-50 w-[calc(100vw*0.8)] h-screen max-w-[500px] transition duration-500`}
      >
        <button
          onClick={() => setIsNavOpen(false)}
          className="absolute top-[40px] left-[40px] text-3xl"
        >
          <IoMdClose />
        </button>
        <nav>
          <ul className="capitalize text-center text-3xl space-y-4 font-primary font-semibold">
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <Link to={"/about"}>about</Link>
            </li>
            <li>
              <Link to={"/portfolio"}>portfolio</Link>
            </li>
            <li>
              <Link to={"/contact"}>contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default MobileNav;

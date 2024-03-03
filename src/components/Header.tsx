import Socials from "./Socials";
import Logo from "../assets/img/header/logo.svg";
import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full">
      <div className="container mx-auto">
        <div className=" h-[100px] lg:h-[140px] flex items-center justify-between">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
          <nav className="hidden lg:flex gap-x-12 font-semibold">
            <Link
              className="text-[#696c6d] hover:text-primary transition"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="text-[#696c6d] hover:text-primary transition"
              to={"/about"}
            >
              About
            </Link>
            <Link
              className="text-[#696c6d] hover:text-primary transition"
              to={"/portfolio"}
            >
              Portfolio
            </Link>
            <Link
              className="text-[#696c6d] hover:text-primary transition"
              to={"/contact"}
            >
              Contact
            </Link>
          </nav>
          <div className="hidden xl:block">
            <Socials />
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

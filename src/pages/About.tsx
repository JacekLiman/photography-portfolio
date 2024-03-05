import WomanImg from "../assets/img/about/woman.png";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CursorContext } from "../components/context/CursorContext";

const About = () => {
  const { handleMouseEnter, handleMouseLeave } = useContext(CursorContext);
  return (
    <section className="section pt-[100px] lg:pt-[140px] animate-pageAnimation opacity-0">
      <div className="container mx-auto h-full">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col text-center lg:text-left justify-center lg:order-2"
          >
            <h1 className="h1 pb-12">About Me</h1>
            <p className="text-[18px] lg:text-[22px]  ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              praesentium illo dolore odit itaque.
            </p>
            <p className="text-[18px] lg:text-[22px] mt-4 mb-8 lg:mt-5 lg:mb-10 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              quo quibusdam sint ullam quis molestias deserunt dignissimos.
            </p>
            <Link
              className="btn inline-block self-start mx-auto lg:mx-0"
              to={"/portfolio"}
            >
              View my work
            </Link>
          </div>
          <div className="flex items-end justify-center lg:order-1">
            <img
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="lg:max-h-[760px] object-cover h-full"
              src={WomanImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

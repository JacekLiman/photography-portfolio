import WomanImg from "../assets/img/home/woman.png";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CursorContext } from "../components/context/CursorContext";

const Home = () => {
  const { handleMouseEnter, handleMouseLeave } = useContext(CursorContext);
  return (
    <section className="section pt-[100px] lg:pt-[140px] animate-pageAnimation opacity-0">
      <div className="container mx-auto h-full">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col text-center lg:text-left justify-center"
          >
            <h1 className="h1 pb-2">
              Photographer <br /> & Film Maker
            </h1>
            <p className="text-[18px] lg:text-[22px] mt-4 mb-8 lg:mt-5 lg:mb-10 ">
              I would love to get suggestions from you.
            </p>

            <Link
              className="btn inline-block self-start mx-auto lg:mx-0"
              to={"/contact"}
            >
              Hire Me
            </Link>
          </div>
          <div className="flex items-end justify-center ">
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

export default Home;

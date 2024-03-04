import Img1 from "../assets/img/portfolio/1.png";
import Img2 from "../assets/img/portfolio/2.png";
import Img3 from "../assets/img/portfolio/3.png";
import Img4 from "../assets/img/portfolio/4.png";

import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="section pt-[100px] lg:pt-0 animate-pageAnimation opacity-0">
      <div className="container mx-auto h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full">
          <div className="flex flex-col text-center lg:text-left justify-center">
            <h1 className="h1 pb-12">Portfolio</h1>
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
              to={"/contact"}
            >
              Hire Me
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="overflow-hidden">
                <img
                  className="h-full hover:scale-105 transition-all duration-400 cursor-pointer"
                  src={Img1}
                  alt=""
                />
              </div>
              <div className="overflow-hidden">
                <img
                  className="h-full hover:scale-105 transition-all duration-400 cursor-pointer"
                  src={Img2}
                  alt=""
                />
              </div>
              <div className="overflow-hidden">
                <img
                  className="h-full hover:scale-105 transition-all duration-400 cursor-pointer"
                  src={Img3}
                  alt=""
                />
              </div>
              <div className="overflow-hidden">
                <img
                  className="h-full hover:scale-105 transition-all duration-400 cursor-pointer"
                  src={Img4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

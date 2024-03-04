import WomanImg from "../assets/img/about/woman.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section pt-[100px] lg:pt-0">
      <div className="container mx-auto h-full">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col text-center lg:text-left justify-center">
            <h1 className="h1 pb-12">About Me</h1>
            <p className="text-[18px] lg:text-[22px]  ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              praesentium illo dolore odit itaque.
            </p>
            <p className="text-[18px] lg:text-[22px] mt-4 mb-8 lg:mt-5 lg:mb-10 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              quo quibusdam sint ullam quis molestias deserunt dignissimos.
            </p>
            <Link className="btn inline-block self-start mx-auto lg:mx-0" to={"/portfolio"}>
              View my work
            </Link>
          </div>
          <div className="flex items-center justify-center lg:order-1">
            <img className="max-h-[660px]" src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

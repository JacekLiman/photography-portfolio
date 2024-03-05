import WomanImg from "../assets/img/contact/woman.png";

import { useContext } from "react";
import { CursorContext } from "../components/context/CursorContext";

const Contact = () => {
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
            <h1 className="h1 pb-2">Contact Me</h1>
            <p className="text-[18px] lg:text-[22px] mt-4 mb-8 lg:mt-5 lg:mb-10 ">
              I would love to get suggestions from you.
            </p>

            <form className="mt-6">
              <div className="grid grid-cols-2 gap-10">
                <input
                  placeholder="Your name"
                  type="text"
                  className="p-3 border-b border-primary outline-none"
                />
                <input
                  placeholder="Your email"
                  type="email"
                  className="p-3 border-b border-primary outline-none"
                />
              </div>
              <input
                placeholder="Your message"
                type="text"
                className="mt-5 w-full p-3 border-b border-primary outline-none"
              />
              <button
                onClick={(e) => e.preventDefault()}
                className="mt-10 btn block mx-auto lg:mx-0"
              >
                Send It
              </button>
            </form>
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

export default Contact;

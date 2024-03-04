import WomanImg from "../assets/img/home/woman.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="text-center lg:text-left">
            <h1 className="h1 pt-36 pb-12 lg:text-[]">
              Photographer <br /> & film maker
            </h1>
            <p className="font-primary text-[26px] lg:text-[32px] mb-4 lg:mb-12">
              Los Angeles, USA
            </p>
            <Link className="btn inline-block" to={"/contact"}>
              hire me
            </Link>
          </div>
          <div >
            <div className="h-full">
              <img className="h-full object-cover" src={WomanImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import Resume from "../../Resume";
import { Link } from "react-router-dom";

const Banner = () => {

  return (
    <div className="mb-10 ">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/PNsW2VnY/Chandon-kumar-6.png",
        }}
      >
        <div className="grid lg:grid-cols-2 justify-between items-center  gap-12">
          <div className="">
            <h1 className="text-5xl font-bold ">
              <span className="text-green-500">HI</span>, <span>I'm</span>{" "}
              Chandon Kumar.
            </h1>
            <h2 className="text-2xl mb-9 ">A Passionat Web developer  </h2>
            <div className="text-4xl flex items-center gap-3">
              {" "}
             <Link to={'https://github.com/chandonkumar23'}> <FaGithub className="hover:text-green-400" /></Link>
             <Link to={'https://www.facebook.com/chandonkumerbappy.chandonkumerbappy'}> <FaFacebook className="hover:text-green-400" /></Link>
             <Link to={'https://www.linkedin.com/in/chandon-kumar-4033072a0/'}> <FaLinkedin className="hover:text-green-400" /></Link>
            <Resume></Resume>
            </div>
          </div>
          <div>
            <img
              className="rounded-full border-4 shadow-2xl border-x-green-600 "
              src="https://i.postimg.cc/nLxb83TV/FB-IMG-1687531402988-removebg-preview.png"
              alt=""
            />
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Banner;

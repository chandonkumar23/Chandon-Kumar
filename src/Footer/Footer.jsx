import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-[#3d3d85] text-white">
        <aside className="items-center grid-flow-col">
        <img className="h-[70px]" src="https://i.postimg.cc/R0VF51Mt/H-1-removebg-preview.png" alt="" />
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <div className="text-4xl flex items-center gap-3">
              {" "}
              <FaGithub className="hover:text-green-400" />{" "}
              <FaFacebook className="hover:text-green-400" />{" "}
              <FaLinkedin className="hover:text-green-400" />
          
            </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

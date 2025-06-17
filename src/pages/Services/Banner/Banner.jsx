import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from 'framer-motion';
import Resume from "../../Resume";
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {

  return (
     <div className="mb-10 relative min-h-screen overflow-hidden">
      {/* Background image with zoom animation */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/PNsW2VnY/Chandon-kumar-6.png')",
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Color blobs animation */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-green-400 rounded-full filter blur-3xl opacity-20"
        animate={{ x: [0, 100, -100, 0], y: [0, -80, 80, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
        style={{ top: '-200px', left: '-200px', zIndex: 0 }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full filter blur-3xl opacity-20"
        animate={{ x: [0, -120, 120, 0], y: [0, 70, -70, 0] }}
        transition={{ duration: 35, repeat: Infinity }}
        style={{ bottom: '-150px', right: '-200px', zIndex: 0 }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content */}
      <section className="relative z-10 container mx-auto px-6 py-16 grid lg:grid-cols-2 items-center gap-12 min-h-screen">
        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-white drop-shadow-md leading-tight">
            <span className="text-green-400">Hi</span>, I'm <br />
            <span className="text-green-300">Chandon Kumar</span>
          </h1>

          <h2 className="text-2xl mt-4 mb-8 text-white/90 font-semibold h-12">
            <TypeAnimation
              sequence={[
                "A MERN Stack Developer", 2000,
                "A Front end Developer", 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <div className="flex items-center gap-5 text-3xl text-white">
            <a
              href="https://github.com/chandonkumar23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/chandonkumerbappy.chandonkumerbappy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/chandon-kumar-4033072a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <Resume />
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <img
            className="rounded-full w-[350px] h-[350px] border-4 border-green-500 shadow-2xl object-cover"
            src="https://i.postimg.cc/nLxb83TV/FB-IMG-1687531402988-removebg-preview.png"
            alt="Chandon Kumar"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Banner;

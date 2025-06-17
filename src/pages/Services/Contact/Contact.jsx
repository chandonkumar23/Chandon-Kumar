import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Resume from "../../Resume";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j1e3cve",
        "template_ajw3pud",
        form.current,
        "xYuNdp0HE0k2IclfW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <motion.div
      className="mb-20 max-w-[1450px] mx-auto px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold border-s-4 ps-4 mb-10">Contact</h1>

      <form ref={form} onSubmit={sendEmail}>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Form */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                className="input input-bordered input-success w-full"
                required
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter Your Email"
                className="input input-bordered input-success w-full"
                required
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                rows="5"
                className="textarea textarea-bordered w-full border-success"
                placeholder="Write your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="btn bg-gradient-to-r from-[#2EC1DB] to-sky-500/30 text-white shadow-lg"
            >
              Submit
            </button>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Chandon Kumar</h2>
            <div className="flex items-center gap-2 text-lg">
              <FaPhoneAlt /> <span>+88 01794912083</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <CgMail /> <span>chandonkumar2023@gmail.com</span>
            </div>
            <div className="flex gap-5 text-3xl">
              <Link to="https://github.com/chandonkumar23" target="_blank">
                <FaGithub className="hover:text-green-400" />
              </Link>
              <Link
                to="https://www.facebook.com/chandonkumerbappy.chandonkumerbappy"
                target="_blank"
              >
                <FaFacebook className="hover:text-green-400" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/chandon-kumar-4033072a0/"
                target="_blank"
              >
                <FaLinkedin className="hover:text-green-400" />
              </Link>
              <Resume />
            </div>
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;

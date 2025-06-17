import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Design",
    description:
      "My approach is rooted in a blend of aesthetics and user experience, ensuring that each website not only looks impressive but also engages visitors seamlessly. From responsive layouts that adapt to various devices to intuitive navigation that enhances user interaction, we prioritize the elements that contribute to a compelling online experience.",
  },
  {
    title: "Web Development",
    description:
      "We specialize in front-end and back-end development, ensuring a seamless integration of design and functionality. From intuitive user interfaces that captivate visitors to robust server-side logic that powers your web applications, our holistic approach guarantees a cohesive and high-performing digital solution.",
  },
];

const Services = () => {
  return (
    <div className="mb-32 max-w-[1450px] mx-auto pt-10 px-4">
      <motion.h1
        className="text-4xl font-thin border-s-4 border-green-500 ps-3 font-bold mb-7"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Services
      </motion.h1>

      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, delay }) => (
  <motion.div
    className="bg-[#6969ba] border-e-8 rounded-md p-5 shadow-2xl text-white"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-bold text-center mb-3">{title}</h2>
    <p className="text-justify">{description}</p>
  </motion.div>
);

export default Services;

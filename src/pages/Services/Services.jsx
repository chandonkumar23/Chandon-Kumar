const Services = () => {
  return (
    <div className="mb-32 max-w-[1450px] mx-auto pt-10">
      <h1 className="text-4xl font-thinr border-s-4 font-bold mb-7">
        My Services
      </h1>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="bg-[#6969ba] border-e-8 rounded-md p-3  shadow-2xl">
            <h2 className="text-2xl font-bold text-center">Web Desgin</h2>
            <p>
            my approach is rooted in a blend of aesthetics and user experience, ensuring that each
             website not only looks impressive but also engages visitors seamlessly. From responsive
              layouts that adapt to various devices to intuitive navigation that enhances user interaction,
               we prioritize the elements that contribute to a compelling online experience.
            </p>
          </div>

        <div>
        <div className="bg-[#6969ba] border-e-8 rounded-md p-3 shadow-2xl " >
            <h2 className="text-2xl font-bold text-center">Web Developing</h2>
            <p>
            We specialize in front-end and back-end development, ensuring a seamless integration of design and functionality. 
            From intuitive user interfaces that captivate visitors to robust server-side logic
             that powers your web applications, our holistic approach guarantees a cohesive and high-performing digital solution.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

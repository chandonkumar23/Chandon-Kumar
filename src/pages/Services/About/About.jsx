import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

const AboutMe = () => {
  return (
    <div className="max-w-[1450px] mx-auto lg:pt-10 mb-32 px-4">
      <h1 className="text-4xl font-thin border-s-4 border-green-500 ps-3 font-bold mb-7">
        About Me
      </h1>

      <div className="max-w-[1200px] mx-auto mb-5">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* Image */}
          <div>
            <img
              className="border-e-8 shadow-2xl rounded-md"
              src="https://i.ibb.co/0py233V3/Untitled-Project.jpg"
              alt="Profile"
            />
          </div>

          {/* Content */}
          <div>
            <p className="font-bold text-sm mb-10 leading-relaxed">
              <span className="text-3xl text-green-500">Hello!</span> I'm
              Chandon Kumar. I'm a professional web developer from Bangladesh.
              I work in web design and development. I’ve completed several
              successful projects driven by my passion for coding.
            </p>

            <Tabs>
              <TabList>
                <Tab>Skills</Tab>
                <Tab>Experience</Tab>
                <Tab>Education</Tab>
              </TabList>

              {/* Skills Tab */}
              <TabPanel>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="grid lg:grid-cols-2 gap-5 mt-6"
                >
                  {/* Web Design */}
                  <div className="border-r-4 rounded-lg border-green-600 p-4 bg-slate-700 text-white">
                    <h2 className="text-xl font-bold mb-4">Web Design</h2>
                    <div className="flex gap-3 flex-wrap mb-4">
                      <img className="h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                      <img className="h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                      <img className="h-8" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind" />
                      <img className="h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                      <img className="h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                    </div>

                    {/* Progress Bars */}
                    <SkillBar title="HTML/CSS" percent="90%" />
                    <SkillBar title="JavaScript" percent="80%" />
                    <SkillBar title="React" percent="85%" />
                  </div>

                  {/* Web Development */}
                  <div className="border-r-4 rounded-lg border-green-600 p-4 bg-slate-700 text-white">
                    <h2 className="text-xl font-bold mb-4">Web Development</h2>
                    <div className="flex gap-3 flex-wrap mb-4">
                      <img className="h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                      <img className="h-8" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind" />
                      <img className="h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                      <img className="h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
                      <img className="h-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                    </div>

                    {/* Progress Bars */}
                    <SkillBar title="Node.js & Express" percent="75%" />
                    <SkillBar title="MongoDB" percent="70%" />
                    <SkillBar title="Full Stack" percent="80%" />
                  </div>
                </motion.div>
              </TabPanel>

              {/* Experience Tab */}
              <TabPanel>
                <div className="mt-4 space-y-4">
                  <p>
                    I have 1 year of experience in web development. Over the
                    last 6 months, I’ve learned advanced technologies and built
                    several full-stack projects using the MERN stack.
                  </p>
                  <span className="text-green-500 block">Click the image to see live preview</span>
                  <div className="bg-gray-400 p-4">
                    <Link to={"https://assignment-12-17c04.web.app/"} target="_blank">
                      <img
                        className="h-[200px] mx-auto"
                        src="https://i.postimg.cc/qRPMSJyY/screencapture-assignment-12-17c04-web-app-2023-12-11-11-19-45.png"
                        alt="Project Preview"
                      />
                    </Link>
                  </div>
                </div>
              </TabPanel>

              {/* Education Tab */}
              <TabPanel>
                <div className="mb-6 flex justify-center">

                </div>

                <div className="grid lg:grid-cols-2 gap-4 mt-6">
                  <div className="border-r-4 rounded-lg border-green-600 p-4 bg-slate-700 text-white">
                    <h2 className="font-bold text-xl mb-2">Secondary School Certificate (SSC)</h2>
                    <p>Group: Science</p>
                    <p>Education Year: 2018</p>
                    <p>Passed Year: 2019</p>
                  </div>

                  <div className="border-r-4 rounded-lg border-green-600 p-4 bg-slate-700 text-white">
                    <h2 className="font-bold text-xl mb-2">Higher Secondary Certificate (HSC)</h2>
                    <p>Group: Science</p>
                    <p>Education Years: 2019–2023</p>
                    <p>Passed Year: 2021</p>
                  </div>
                </div>
              </TabPanel>

            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Skill Bar Component
const SkillBar = ({ title, percent }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm mb-1">
      <span>{title}</span>
      <span className="text-green-400 font-semibold">{percent}</span>
    </div>
    <div className="w-full bg-gray-300 rounded-full h-3">
      <motion.div
        className="bg-green-500 h-3 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: percent }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

export default AboutMe;

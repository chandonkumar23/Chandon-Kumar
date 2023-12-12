import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Skills from "../Skills";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="  max-w-[1450px] mx-auto lg:pt-10 mb-32">
      <h1  className="text-4xl font-thinr border-s-4 font-bold mb-7 " >
        {" "}
        About Me
      </h1>

      <div className="max-w-[1200px] mx-auto mb-5">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <img
              className="border-e-8 shadow-2xl rounded-md"
              src="https://i.postimg.cc/PqCW3cr7/Whats-App-Image-2023-12-11-at-00-30-08-f7aceefa-removebg-preview.png"
              alt=""
            />
          </div>

          <div>
            <p className="font-bold text-xm mb-10">
              <span className="text-3xl text-green-500"> Hello!</span> I'm
              Chandon Kumar. I'm a professional web developer from Bangladesh.Generally I work in webdesgin and wd developing. 
               Already I have completed and am doing several tasks.successfully.I am doing this work because of my passion.  I enjoy this work
            
            </p>
            <Tabs>
              <TabList>
                <Tab>Skills</Tab>
                <Tab>Eexprience</Tab>
                <Tab>Education</Tab>
              </TabList>

              <TabPanel>
                <div className="grid lg:grid-cols-2 gap-5">

                 <div>
                 <div className="border-r-4	rounded-lg border-green-600 p-4  bg-slate-700 ">
                    <h2 className="text-xl font-bold mb-5">Web Desgin</h2>
                    <div className="flex gap-1">
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/Zny0Z5mp/html-5-svgrepo-com-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/jC02jYq9/css-3-svgrepo-com-1-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/VNDJWh4r/tailwind-svgrepo-com-1-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/fbw3Xs7Q/js-svgrepo-com.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/T3ZxMJw7/react-svgrepo-com-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                    </div>
                  </div>
                 </div>
                  <div className="border-r-4	rounded-lg border-green-600 p-4  bg-slate-700">
                    <h2 className="text-xl font-bold mb-5">Web Developing</h2>
                    <div className="flex gap-1">

                    <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/T3ZxMJw7/react-svgrepo-com-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                     
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/VNDJWh4r/tailwind-svgrepo-com-1-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/44K1nvNb/node-js-svgrepo-com-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/wTFS9Xwc/ex-removebg-preview.png"
                        alt=""
                      />
                      <img
                        className=" h-[30px]"
                        src="https://i.postimg.cc/sXL1tZk3/mongodb-svgrepo-com-Photo-Room-png-Photo-Room.png"
                        alt=""
                      />       
                    </div>
                 
                  </div>
                 
                </div>
                <Skills></Skills>
              </TabPanel>
              <TabPanel>
                <h2>I have 1 year exprience on web development and form last 6 months i have learnd some advance technolllogy through har work abd i gave nade some Projects
                  withmy skills
                </h2>
                <span className="text-green-500">Click the image and see live preview</span>
                <div className="bg-gray-400 p-4"><Link to={'https://assignment-12-17c04.web.app/'}><img className="h-[200px] flex justify-center mx-auto" src="https://i.postimg.cc/qRPMSJyY/screencapture-assignment-12-17c04-web-app-2023-12-11-11-19-45.png" alt="" /></Link></div>
      
              </TabPanel>
              <TabPanel>
              <div className="grid lg:grid-cols-2 gap-3">
                <div  className="border-r-4	rounded-lg border-green-600 p-4  bg-slate-700">
                <h2 className="font-bold text-gray-300">Secendray School Certificate (SSC)</h2>
                <p>Group of Science</p>
                <p> Education Year: 2018</p>
                <p>Pssed Year: 2019</p>
                </div>
                <div  className="border-r-4	rounded-lg border-green-600 p-4  bg-slate-700">
                <h2 className="font-bold text-gray-300">Higher Secendray Certificate (HSC)</h2>
                <p>Group of Science</p>
                <p> Education Years: 2019-2023</p>
                <p>Pssed Year: 2021</p>
                </div>
              </div>
              </TabPanel>
            </Tabs>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { LiaEyeSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mb-32 max-w-[1450px] mx-auto">
      <h1 className="text-4xl font-thinr border-s-4 font-bold mb-7">
        My Projects
      </h1>

      <div className=" max-w-[1200px] mx-auto">
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-2  gap-5">
            <div>
              <img
                className="h-[300px]"
                src="https://i.postimg.cc/qRPMSJyY/screencapture-assignment-12-17c04-web-app-2023-12-11-11-19-45.png"
              />
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-[#2EC1DB] to-sky-500/30">
                Trips Fables.
              </h2>
              <p>
               Through this website the everyone can find his favorite place where he wants to go on tour and book the tour very easily
               A new user can sign up very easily. and can login. user can add his/her favorite places to the wish list
              If a normal user clicks on the profile picture in the nav bar, a dashboard will be displayed which will have My Profile, My Booking, My Waste Test.
              This website has admit roll. Admin can add sightseeing places.
              </p>
              <div className="flex gap-3">
                <Link
                  to={
                    "https://github.com/chandonkumar23/Trips-Fables-client-site"
                  }
                  className="flex hover:text-green-400 "
                >
                  {" "}
                  <FaGithub className="text-2xl" />
                  <span>View Code</span>
                </Link>
                <Link
                  to={"https://assignment-12-17c04.web.app/"}
                  className="flex hover:text-green-400 "
                >
                  {" "}
                  <LiaEyeSolid className="text-2xl" />
                  <span>Live Preview</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <img
                className="h-[300px]"
                src="https://i.postimg.cc/G3TQZdZj/screencapture-localhost-5175-2023-12-11-11-28-36.png"
              />
            </div>
            <div className="space-y-3">
              <a className="btn btn-ghost normal-case font-extrabold text-4xl">
                CHOICE <span className="text-orange-600 ">Events</span>
              </a>
              <p>
              This is educational events manegment website,banner,services,gallary,and testimonial this all sectionis the main section of this website.user esaly visite all section.
             Total five active routes,home login register,blog and team. blog and team routes is privet , user can not access the blog and team section if user do not register and login and read more , service detailes also privet routes.
             the password field is validate. password must be six characters including one uppercase letter, one special character.
             when user currectly registered , login and log out then show sweeth alert and show .
             this website is tottly reponsice for mobaile tablate and larges deavices
              </p>
              <div className="flex gap-3">
                <Link to={"https://github.com/chandonkumar23/Choice-event"} className="flex hover:text-green-400 ">
                  
                  <FaGithub className="text-2xl" />
                  <span>View Code</span>
                </Link>
                <Link to={"https://event-management-8ba41.web.app/"} className="flex hover:text-green-400 ">
                  
                  <LiaEyeSolid className="text-2xl" />
                  <span>Live Preview</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid lg:grid-cols-2  gap-5">
            <div>
              <img
                className="h-[300px]"
                src="https://i.postimg.cc/26bS0bbh/screencapture-assignment-7bce6-web-app-2023-12-11-11-21-40.png"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl text-orange-500 font-bold">
                Han<span className="text-white">dy</span>
              </h1>

              <p>
             This is a home service exchange website ,here have some home service everone can post and book a service
              everone can see 4 popular services on home page and have more button ,onclicking the more button then redirec the all service section here have 6 sercive and more button onclicking more button then show other all services.
              only user can see service detailes, and booking service ,if valid user click the detailes button the redirec the service detailes section ,here user can see service full detailes and have book button ,user can book service
              </p>
              <div className="flex gap-3">
                <Link to={"https://github.com/chandonkumar23/Handy-client-site"} className="flex hover:text-green-400 ">
                  {" "}
                  <FaGithub className="text-2xl" />
                  <span>View Code</span>
                </Link>
                <Link to={"https://assignment-7bce6.web.app"} className="flex hover:text-green-400 ">
                  {" "}
                  <LiaEyeSolid className="text-2xl" />
                  <span>Live Preview</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Projects;

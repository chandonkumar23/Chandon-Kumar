import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


import Resume from "../../Resume";
import { Link } from "react-router-dom";



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j1e3cve', 'template_ajw3pud', form.current, 'xYuNdp0HE0k2IclfW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        
        <div className="mb-10 max-w-[1450px] mx-auto">
            <h1 className="text-4xl font-thinr border-s-4 font-bold mb-7">
       
        Contact
      </h1>
   <form ref={form} onSubmit={sendEmail}>
   <div className="grid lg:grid-cols-2 items-center mb-10">
     <div className="max-w-[650px] mx-auto">
      <div className="mb-5">
      <label htmlFor="">Name</label>
      <div>
      <input type="text" placeholder="Enter Your Name" name="user_name" className="input input-bordered input-success w-full max-w-xs" />
      </div>
      <label htmlFor="">E-mail</label>
      <div>
      <input type="text" placeholder="Enter Your E-mail" name="user_email" className="input  input-success w-full max-w-xs" />
      </div>
      </div>
    <div>
    <textarea className=" border-2 border-success" name="message" id="" cols="40" rows="5"></textarea>
    <Link  className=" text-center bg-green-500 p-1 text-white rounded-sm flex items-center shadow-2xl bg-gradient-to-r from-[#2EC1DB] to-sky-500/30">submit</Link>
    </div>
    </div>
    <div className="space-y-8">
       <h2 className="text-3xl font-bold">Chandon Kumar</h2>
     <div className="flex items-center gap-1 text-lg"><FaPhoneAlt /> <p> +88 01794912083</p></div>
     <div className="flex items-center gap-1 text-lg"> <CgMail /><p>chandonkumar2023@gmail.com</p></div>
       <div className="text-4xl flex items-center gap-3">
             
             <Link to={'https://github.com/chandonkumar23'}> <FaGithub className="hover:text-green-400" /></Link>
             <Link to={'https://www.facebook.com/chandonkumerbappy.chandonkumerbappy'}> <FaFacebook className="hover:text-green-400" /></Link>
             <Link to={'https://www.linkedin.com/in/chandon-kumar-4033072a0/'}> <FaLinkedin className="hover:text-green-400" /></Link>
              <Resume></Resume>
            </div>
    </div>
     </div>

   
            
   </form>
        </div>
    );
};

export default Contact;
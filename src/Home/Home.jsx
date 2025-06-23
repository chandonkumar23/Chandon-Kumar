import Resume from "../pages/Resume";
import About from "../pages/Services/About/About";
import Banner from "../pages/Services/Banner/Banner";
import Contact from "../pages/Services/Contact/Contact";
import Project from "../pages/Services/Projects/NavProject/Project";
import Projects from "../pages/Services/Projects/Projects";
import Services from "../pages/Services/Services";


const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <About></About>
         <Services></Services>
         <Project></Project>
         <Contact></Contact>
         
        
        
        </div>
    );
};

export default Home;
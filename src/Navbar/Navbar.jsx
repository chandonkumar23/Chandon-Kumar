import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
   <div className="w-full">
  <div className="navbar sm:static lg:fixed top-0 left-0 right-0 z-50 bg-[#2d2d70] text-white shadow-md px-4 py-2">
    {/* Start Section (Logo & Dropdown) */}
    <div className="navbar-start">
      {/* Mobile Dropdown */}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-[#2d2d70] rounded-box w-52 font-medium">
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/projects"}>Projects</NavLink></li>
          <li><NavLink to={"/services"}>Services</NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>
      </div>
      {/* Logo */}
      <NavLink to={"/"}>
        <img className="h-[60px]" src="https://i.postimg.cc/R0VF51Mt/H-1-removebg-preview.png" alt="Logo" />
      </NavLink>
    </div>

    {/* Center Menu for Desktop */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 space-x-4 text-lg font-medium">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>Home</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>Projects</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>Services</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>Contact</NavLink></li>
      </ul>
    </div>
  </div>
</div>

  );
};

export default Navbar;
import  { useEffect, useState } from "react";
import { ArrowRight, Bold, Menu,  X } from "lucide-react";  
import image from '../assets/react.svg'
import  { useRef } from "react";
import Button from "./ui/Button";

 export const navLinks = [
    { name: "Home", path: "home",type:"scroll" },
    { name: "Service", path: "service",type:"scroll" },
        { name: "Blog", path: "blog",type:"scroll" },
    // { name: "About", path: "/about" ,type:"route"},
    { name: "Career", path: "/career",type:"route" },
  ];

const Navbar = () => {
  const isScrollNavigation = useRef(false);
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

       const MobNavLinks = [
    { name: "Home", path: "home",type:"scroll" },
    { name: "Service", path: "service",type:"scroll" },
     { name: "Blog", path: "blog",type:"scroll" },
    { name: "Career", path: "/career",type:"route" },
     { name: "ContactUs", path: "/contact",type:"route" }
  ];

useEffect(() => {
  const sections = document.querySelectorAll("[data-section]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute("data-section");
          setActive(sectionName);
        }
      });
    },
    {
      root: null,
      threshold: 0.6, // 60% visible = active
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const sections = document.querySelectorAll("[data-section]");
  const observer = new IntersectionObserver(
    (entries) => {
      if (isScrollNavigation.current) return; 

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute("data-section");
          setActive(sectionName);
        }
      });
    },
    { root: null, threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
},);

useEffect(() => {
  const allLinks = [...navLinks, ...MobNavLinks];

  const currentRoute = allLinks.find(
    (link) => link.type === "route" && link.path === location.pathname
  );

  if (currentRoute) {
    setActive(currentRoute.name);
    return;
  }

  if (location.pathname === "/" && !isScrollNavigation.current) {
    setActive("Home");
  }
}, [location.pathname]);

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


const handleNavClick = (name, path, type) => {
  setOpen(false);

  if (type === "route") {
    isScrollNavigation.current = false;
    setActive(name);
    return;
  }

  isScrollNavigation.current = true; 
  setActive(name);

  if (location.pathname !== "/") {
    // navigate("/");
    // Increase timeout 
    setTimeout(() => {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Release the lock after the scroll animation finish
        setTimeout(() => { isScrollNavigation.current = false; }, 1000);
      }
    }, 100);
  } else {
    document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => { isScrollNavigation.current = false; }, 1000);
  }
};

  const redirectContact = () => navigate("/contact");
  return (
    <>
  
<nav
  ref={navRef}  
  className="fixed top-0 left-0 right-0 bg-blue-700  w-screen  backdrop-blur-sm shadow-sm   z-50">
      <div className=" my-auto h-full mx-auto min-h-18 lg:max-h-24 md:max-h-24 sm:max-h-24 max-h-16 bg-[#171717]    max-w-7xl px-6 flex items-center justify-between ">
       <div className="h-10 w-10 bg-red-800  md:h-20 my-auto md:w-20 lg:h-20 lg:w-20  sm:h-20 sm:w-20   overflow-hidden flex items-center ">
      <img
      onClick={() => handleNavClick("Home", "home","scroll")}
        src={image}
        alt="logo"
        className="mx-auto my-auto bg-amber-500  w-full    cursor-pointer"
      />
    </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center md:gap-8 gap-4 ">
          {navLinks.map(({ name, path,type }) => (
            <li
              key={name}
              className={`cursor-pointer transition-all text-xl  duration-300 hover:text-emerald-400
                ${active === name ? "text-emerald-400  text-base border-b-2 border-emerald-400" : "text-gray-400"}`}
              onClick={() => handleNavClick(name, path,type)}
            >
              {name}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block  ">
          <Button primary value="Connect" onClick={redirectContact} icon={ArrowRight} />
        </div>


        {/* Mobile Toggle */}
        <button className="md:hidden lg:hidden sm:block my-0 text-green-700 bg-transparent py-2  z-40 bg-red-500" onClick={() => setOpen(!open)}>
          {open ? <X size={22 } fontWeight={Bold} /> : <Menu  size={30} />}
        </button>
      </div>
      {/* Mobile Menu */}
    </nav>
     <div
        className={`md:hidden z-50  bg-[#171717]  backdrop-blur-2xl sm:mt-20 md:mt-20 lg:mt-20  mt-18 lg:hidden  px-10  space-y-3  transition-all duration-500 ease-in-out overflow-hidden fixed  w-2/5 right-0   ${
          open ? 'max-h-[500px] opacity-100 ' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="gap-0.5">
          {MobNavLinks.map(({ name, path, type }) =>(
            <li
              key={name}
              className={`block py-2 text-center tracking-wider backdrop:blur-2xl  cursor-pointer transition duration-300
                hover:text-emerald-400
                ${active === name ? "text-emerald-400 font-lighter" : "text-gray-400"}`}
              onClick={() => handleNavClick(name, path ,type)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
        </>
  );
};
export default Navbar;
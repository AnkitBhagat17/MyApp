import React, { use } from "react";
import { useState } from "react";
import logo from "../../assets/logo1.png";
import "./Navbar.css";
import underline from "../../assets/underline.png";


const Navbar = () => {
  const [menu, setMenu] = useState("about");

  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.add("active");

    }
   
  };
  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("active");
    }
  };

  return (
      <div className="navbar">
      <img src={logo} alt="Logo" className="logo1" />
      <img src={side_menu} alt="" onClick={openMenu} className="nav-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={close_x} alt="" onClick={closeMenu} className="nav-close" />
            <li><AnchorLink className="anchor-link"  href="#home"><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu === "home"?<img src={underline} alt="" />:<> </>}</li>
            <li><AnchorLink className="anchor-link"  href="#about"><p onClick={()=> setMenu("about")}>About Me</p></AnchorLink>{menu === "about"?<img src={underline} alt="" />:<></>}</li>
            <li><AnchorLink className="anchor-link"  href="#services"><p onClick={()=> setMenu("services")}>Services</p></AnchorLink>{menu === "services"?<img src={underline} alt="" />:<></>}</li>
            <li><AnchorLink className="anchor-link"  href="#work"><p onClick={()=> setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work"?<img src={underline} alt="" />:<></>}</li>
            <li><AnchorLink className="anchor-link"  href="#contact"><p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact"?<img src={underline} alt="" />:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link"  href="#contact">Connect With Me</AnchorLink></div>
      
      
      
      </div>
      
  );
}
export default Navbar;
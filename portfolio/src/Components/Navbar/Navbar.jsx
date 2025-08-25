// import React, { useState, useRef } from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo1.png'

// import underline from '../../assets/underline.png'
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import menu_open from '../../assets/side_menu.svg'
// import close_x from '../../assets/close_x.svg'



// const Navbar = () => {
//   const [menu,setMenu] = useState("home")
//   const menuRef = useRef();

//   const openMenu = () => {
//     menuRef.current.style.right="0"
//   }

//   const closeMenu = () => {
//   menuRef.current.style.right="-350px"
//   }
// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   const menuRef = useRef();

//   const openMenu = () => {
//     if (menuRef.current) {
//       menuRef.current.style.right = "0";
//     }
//   };

//   const closeMenu = () => {
//     if (menuRef.current) {
//       menuRef.current.style.right = "-350px";
//     }
//   };

//   return (
//     <div className='navbar'>
//       <img src={logo} alt="" />
//       <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
//       <ul ref={menuRef} onClick={closeMenu} className="nav-menu">
//         <img src={close_x} alt="" className="nav-mob-close" />
//         <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
//         <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About me</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>
//         <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt='' /> : <></>}</li>
//         <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} alt='' /> : <></>}</li>
//         <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</li>
//       </ul>
//       <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>

//     </div>
//   )
// }

// export default Navbar


import React, { use } from "react";
import { useState } from "react";
import logo from "../../assets/logo1.png";
import "./Navbar.css";
import underline from "../../assets/underline.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import side_menu from "../../assets/side_menu.svg";
import close_x from "../../assets/close_x.svg";
import { useRef } from "react";


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
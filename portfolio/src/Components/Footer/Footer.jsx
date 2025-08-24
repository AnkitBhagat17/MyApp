import React from "react";
import "./Footer.css";
import logo1 from "../../assets/logo1.png";
import user_icon from "../../assets/user_icon.svg";
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo1} alt="footer-logo" />
                    <p>I'm a Data Analyst passionate about transforming data into actionable insights and creating impactful visualizations.</p>
                </div>
                <div className="footer-top-right">

                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe!
                    </div>

                    <div className="footer-socials">
                        <a 
                            href="https://github.com/AnkitBhagat17" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <img src={github} alt="GitHub" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/ankitsbhagat/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                    </div>

                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    @2025 Ankit Bhagat. All rights reserved.
                </p>
                <div className="footer-bottom-right">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;
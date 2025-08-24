import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Profile.png'
import Ankit_Resume from '../../assets/Ankit_S_Bhagat_Resume.pdf';

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'am Ankit Bhagat,</span> Data Analyst.</h1>
        <p>Currently Pursuing B.Tech from SBJITMR.</p>

        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">
                    <a
                        href={Ankit_Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-link"
                    >
                        My Resume
                    </a>
                </div>
        </div>

    </div>
  )
}

export default Hero
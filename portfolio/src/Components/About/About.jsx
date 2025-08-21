import React from 'react'
import './About.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/Profile.png'

export const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>

        <div className="about-sections">
            {/* <div className="about-left">
                <img src={profile_img} alt="" />
            </div> */}
            <div className="about_right">
                <div className="about-para">
                    <p>I am a passionate Junior Data Analyst with a strong foundation in data collection, cleaning, visualization, and statistical analysis.</p>
                    <p>Skilled in using tools such as Python, SQL, Excel, Power BI, and Tableau, I enjoy uncovering meaningful insights from data to support business decisions. With hands-on experience in exploratory data analysis, dashboards, and reporting, I focus on transforming raw data into clear, actionable information.</p>
                </div>

                <div className="about-skills">
                    <h1>Skills :</h1>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Streamlit</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Excel</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Power BI</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Tableau</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Data Visulization</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Data Cleaning</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>

        <div className="about-certification">
            <h2>Certifications :</h2>
            <div className="about-certificate">
                <h3>1. NPTEL Certificate</h3>
                <p>-Data Analytics with Python</p>
                <h3>2. National Cadet Corps</h3>
                <p>-NCC 'C' Certificate Holder</p>
            </div>
        </div>


    </div>
  )
}

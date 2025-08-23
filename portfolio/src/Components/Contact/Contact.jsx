import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
     <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get In Touch With Me</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to work on projects & you have any questions or want to work together, feel free to reach out!</p>
                   <div className="contact-details">
                    <div className="contact-detail">
                        <img src={email} alt="" />
                        <p>bhagatankit502@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={contact} alt="" />
                        <p>+91 7758062991</p>
                    </div>
                    <div className="contact-detail">
                        <img src={loc} alt="" />
                        <p>Nagpur(440023),Maharashtra</p>
                    </div>
                    </div> 
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email"/>
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message"  rows="10" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Send Message</button>

                </form>
            </div>
            
        </div>
  );
}

export default Contact
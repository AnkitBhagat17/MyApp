import React from "react";
import "./Contact.css";
import contact from "../../assets/contact.svg";
import loc from "../../assets/loc.svg";
import email from "../../assets/email.svg";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8d4d24d0-5b5f-4644-993c-869139a92bac");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

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
                        <p>Wardha(442102),Maharashtra</p>
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
export default Contact;
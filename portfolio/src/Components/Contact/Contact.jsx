
import React, { useState } from "react";
import "./Contact.css";
import contact from "../../assets/contact.svg";
import loc from "../../assets/loc.svg";
import email from "../../assets/email.svg";

const Contact = () => {
    const [result, setResult] = useState(""); // ✅ state for status messages
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending..."); // show loading text
    const formData = new FormData(event.target);

    formData.append("access_key", "43aa8ab0-c285-484b-a8d0-68d668bc2b99"); // your Web3Forms access key

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("✅ Form Submitted Successfully!");
            alert("✅ Your form has been submitted successfully!");
            event.target.reset(); // clear form after success
        } else {
            console.log("Error", data);
            setResult("❌ " + data.message);
            alert("❌ " + data.message);
        }
    } catch (error) {
        console.error("Error:", error);
        setResult("❌ Something went wrong. Please try again.");
        alert("❌ Something went wrong. Please try again.");
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
                    <p>
                        I'm currently available to work on projects. If you have any
                        questions or want to work together, feel free to reach out!
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={email} alt="email" />
                            <p>bhagatankit502@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={contact} alt="phone" />
                            <p>+91 7758062991</p>
                        </div>
                        <div className="contact-detail">
                            <img src={loc} alt="location" />
                            <p>Wardha(442102), Maharashtra</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        required
                    />

                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        required
                    />

                    <label htmlFor="message">Write Your Message Here</label>
                    <textarea
                        name="message"
                        rows="10"
                        placeholder="Enter your message"
                        required
                    ></textarea>

                    <button type="submit" className="contact-submit">
                        Send Message
                    </button>

                    {/* ✅ Show status message */}
                    {result && <p className="form-status">{result}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;

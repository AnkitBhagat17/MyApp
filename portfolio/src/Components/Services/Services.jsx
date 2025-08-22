import React from "react";
import "./Services.css";
import Services_Data  from "../../assets/services_data.js";

const Services = () => {
    return (
        <div id="services" className="services">
            <div className="services-title">
            <h1>My Services</h1>
            </div>
            
            <div className="services-container">
                {Services_Data.map((service,index) => (
                    <div className="service-format" key={service.index}>
                    <h3>{service.index}</h3>
                    <h2>
                        <span className="service-icon">{service.icon}</span> 
                        <span className="service-title">{service.title}</span>
                    </h2>
                    <p>{service.description}</p>
                </div>
                
                ))}
            </div>
        </div>
    );
}

export default Services;
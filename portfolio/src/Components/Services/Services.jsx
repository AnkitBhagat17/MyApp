import React from 'react'
import './Services.css'

const Services = () => {
    return (
        <div id="services" class="services">
            <div class="services-title">
                <h1>My Services</h1>
            </div>
            <div class="services-container">
                <div class="service-format">
                    <h3>1</h3>
                    <h2>
                        <span class="service-icon">📊</span>
                        <span class="service-title">Data Analysis</span>
                    </h2>
                    <p>
                        Analyzing large datasets to extract meaningful insights using Python and SQL.
                    </p>
                </div>
                <div class="service-format">
                    <h3>2</h3>
                    <h2>
                        <span class="service-icon">📈</span>
                        <span class="service-title">Data Visualization</span>
                    </h2>
                    <p>
                        Creating interactive dashboards and reports using Power BI, Tableau, and Matplotlib.
                    </p>
                </div>
                <div class="service-format">
                    <h3>3</h3>
                    <h2>
                        <span class="service-icon">🗄️</span>
                        <span class="service-title">Database Management</span>
                    </h2>
                    <p>
                        Managing and querying structured & unstructured data with MySQL.
                    </p>
                </div>
                <div class="service-format">
                    <h3>4</h3>
                    <h2>
                        <span class="service-icon">🤖</span>
                        <span class="service-title">Machine Learning (Basic)</span>
                    </h2>
                    <p>
                        Applying ML models for predictive analytics using Scikit-learn, TensorFlow, and Pandas.
                    </p>
                </div>
                <div class="service-format">
                    <h3>5</h3>
                    <h2>
                        <span class="service-icon">🧹</span>
                        <span class="service-title">Data Cleaning & Preprocessing</span>
                    </h2>
                    <p>
                        Cleaning, transforming, and preparing raw datasets for analysis and reporting.
                    </p>
                </div>
                <div class="service-format">
                    <h3>6</h3>
                    <h2>
                        <span class="service-icon">🌐</span>
                        <span class="service-title">Business Intelligence Solutions</span>
                    </h2>
                    <p>
                        Helping businesses make data-driven decisions with BI tools and analytics strategies.
                    </p>
                </div>

            </div>
        </div>


    )
}

export default Services
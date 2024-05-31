import React from "react";
import service from "../assets/images/dashboard.png";
import element from "../assets/images/image-restaurant.jpg";
const ServiceSection = () => {
  return (
    <section id="services" className="featured-section">
      <div className="featured-container">
        <div className="featured-text">
          <h1>Our Services</h1>
          <div className="feature-line"></div>
        </div>
        <div className="featured-work">
          <div className="featured-img">
            <img src={service} alt="featured image" />
          </div>
          <div className="featured-info">
            <h2>Service Extension</h2>
            <p>
              Enhance support through WhatsApp BOT automations, Email
              integrations, website integrations and phone call integrations to
              deliver the best customer service to your clients.
            </p>
            <div className="featured-btn">
              {" "}
              <button>See More</button>
            </div>
          </div>
        </div>

        <div className="featured-cards">
          <div className="f-card clay">
            <h3>Payment Solution</h3>
            <p>
              payments solution coupled with a management information system
              designed to improve efficiency of operations for players in the
              Micro Finance Industry..
            </p>
            <div className="board"></div>
          </div>

          <div className="f-card jay">
            <h3>Robust sales management</h3>
            <p>
              Better track prospects, targets, field activity through a fully
              built sales management module.
            </p>
            
          </div>

          <div className="f-card amini">
            <h3>Ticket Management</h3>
            <p>
              Manage all company and product related issues and tickets from one
              central place
            </p>
            
          </div>

          <div className="f-card drip">
            <h3>Streamlined Data processing</h3>
            <p>
              Save time, money while improving efficiency of operations through
              the enhanced data processing tool accessible from anywhere at any
              time.
            </p>
          
          </div>

          <div className="f-card computer">
            <h3>Project Management & Product Development</h3>
            <p>
              Track the performance of all your projects, tasks and sub tasks
              better so as to deliver projects against the best quality and time
              expectations. Developed in compliance with ISO 9001:2015 & ISMS
              27001 Information security acceptable standards.
            </p>
            
          </div>

          <div className="f-card system">
            <h3>System Uptime monitoring</h3>
            <p>
              The easiest way to monitor system’s availability so as to serve
              your customers and clients better.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;

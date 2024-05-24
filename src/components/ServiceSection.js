import React from "react";
import service from "../assets/images/task.svg";
import element from "../assets/images/image-restaurant.jpg"
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
          <div className="f-card confetti">
            <h3>Robust sales management</h3>
            <p>
              Better track prospects, targets, field activity through a fully
              built sales management module
            </p>
            <button>See More</button>
          </div>

          <div className="f-card element overlay">
            <h3>Robust sales management</h3>
            <p>
              Better track prospects, targets, field activity through a fully
              built sales management module
            </p>
            <button>See More</button>
          </div>

          <div className="f-card drag overlay">
            <h3>Ticket Management</h3>
            <p>
              Manage all company and product related issues and tickets from one
              central place
            </p>
            <button>See More</button>
          </div>

          <div className="f-card d-flex overlay">
            <h3>Streamlined Data processing</h3>
            <p>
              Save time, money while improving efficiency of operations through
              the enhanced data processing tool accessible from anywhere at any
              time.
            </p>
            <button>See More</button>
          </div>

          <div className="f-card bg overlay">
            <h3>Project Management & Product Development</h3>
            <p>
              Track the performance of all your projects, tasks and sub tasks
              better so as to deliver projects against the best quality and time
              expectations. Developed in compliance with ISO 9001:2015 & ISMS
              27001 Information security acceptable standards.
            </p>
            <button>See More</button>
          </div>

          <div className="f-card confetti">
            <h3>System Uptime monitoring</h3>
            <p>
              The easiest way to monitor system’s availability so as to serve
              your customers and clients better.
            </p>
            <button>See More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;

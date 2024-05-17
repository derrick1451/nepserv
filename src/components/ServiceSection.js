import restaurant from "../assets/images/image-restaurant.jpg";
import plane from "../assets/images/image-plane.jpg";
import currency from "../assets/images/image-currency.jpg";
import confeti from "../assets/images/image-confetti.jpg";
import ticket from "../assets/images/ticket.png";
import project from "../assets/images/prop.jpg";
import React from "react";
const ServiceSection = () => {
  return (
    <section className="s-section">
      <div className="service-section">
        <h2>Our Services</h2>
        <div className="service-container">
          <div className="items">
            <div className="trial">
            <img src={ticket} alt="restaurant" />
            </div>
            <div>
              <h3>Ticket Management</h3>
              <p>
                Manage all company and product related issues and tickets from
                one central place.
              </p>
              <div className="s-btn">
                <button>See More</button>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="trial">
            <img src={restaurant} alt="restaurant" />
            </div>
           
            <div>
              {" "}
              <h3>Service Extension</h3>
              <p>
                Enhance support through WhatsApp BOT automations, Email
                integrations, website integrations and phone call integrations
                to deliver the best customer service to your clients.
              </p>
              <div className="s-btn">
                <button>See More</button>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="trial">
            <img src={confeti} alt="restaurant" />
            </div>
            
            <div>
              <h3>Streamlined Data processing</h3>
              <p>
                Save time, money while improving efficiency of operations
                through the enhanced data processing tool accessible from
                anywhere at any time.
              </p>
              <div className="s-btn">
                <button>See More</button>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="trial">
            <img src={currency} alt="restaurant" />
            </div>
            
            <div>
              <h3>Robust sales management</h3>
              <p>
                Better track prospects, targets, field activity through a fully
                built sales management module
              </p>
              <div className="s-btn">
                <button>See More</button>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="trial">
            <img src={project} alt="restaurant" />
            </div>
           
            <div>
              <h3>System Uptime monitoring</h3>
              <p>
                The easiest way to monitor system’s availability so as to serve
                your customers and clients better.
              </p>
              <div className="s-btn">
                <button>See More</button>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="trial"><img src={plane} alt="restaurant" /></div>
            
            <div>
              <h3>Project Management & Product Development</h3>
              <p>
                Track the performance of all your projects, tasks and sub tasks
                better so as to deliver projects against the best quality and
                time expectations. Developed in compliance with ISO 9001:2015 &
                ISMS 27001 Information security acceptable standards
              </p>
              <div className="s-btn">
                <button>See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;

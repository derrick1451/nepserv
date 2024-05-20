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
            <div className="trial order-right">
            <img src={restaurant} alt="restaurant" />
            </div>
            <div className="order-left s-text">
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
            <img src={plane} alt="restaurant" />
            </div>
            <div className="s-text">
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
            <div className="trial order-right">
            <img src={confeti} alt="restaurant" />
            </div>
            <div className="order-left s-text" >
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
            <img src={currency} alt="restaurant" />
            </div>
            <div className="s-text">
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
      
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;

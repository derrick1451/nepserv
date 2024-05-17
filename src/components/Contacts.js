import React from "react";
import { useState } from "react";
const Contacts = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comments: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here
      };
  return (
    <section className="contact-section">
      <div className="contact-container">
        <p>
          We are  always interested in hearing about your feedback, so if you'd like
          to chat please get in touch.
        </p>
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
        placeholder="Full name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
        placeholder="Email address"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="comments">Comments:</label>
        <textarea
        placeholder="Leave a comment"
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          required
        />
      </div>
      <div> <button type="submit">Get In Touch</button></div>
     
    </form>
      </div>
    </section>
  );
};
export default Contacts;

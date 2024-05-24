import React from "react";
import "./contact.css";

const ContactUsSection = () => {
  return (
    <div className="contact-us-section" id="contact">
      <h2 className="text-center">Contact Us</h2>
      <div className="form-container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-container">
              <form action="https://formspree.io/f/xjvndoyo" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;

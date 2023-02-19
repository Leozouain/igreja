import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./Visit.module.css";

export default function Visit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to email 'abc@church.com'
    // Placeholder code: console.log(`Sending form data to abc@church.com`);
    setShowModal(true);
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setMessage("");
  };

  return (
    <div>
      <div>
        <div className={styles.banner}>
          <h1 className={styles.text}>Welcome!</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Plan Your Visit</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Your Phone Number:</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="visit-date">Date You'd Like to Visit:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="visit-date"
                    name="visit-date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message (optional):</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="mt-3 mb-5 btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-6 text-center lh-2 mb-5 ">
              <h2>What to Expect</h2>
              <p>
                Welcome to our church! We're so glad that you're interested in
                joining us for worship. Whether you're a longtime church-goer or
                new to the faith, we welcome everyone with open arms. To help
                plan your visit, please fill out the form below with your name,
                email, phone number, and the date you'd like to visit. We'll be
                in touch to confirm your visit and answer any questions you may
                have. While you're here, we want you to feel comfortable and at
                home. Our services typically include worship music, prayer, and
                a message from our pastor, and we offer a variety of ministries
                for all ages and stages of life. Whether you're seeking
                spiritual guidance or simply want to connect with others in the
                community, we believe that you'll find a place here at our
                church.
              </p>
            </div>
          </div>
        </div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Thanks for planning your visit!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <p className="text-center">We look forward to seeing you soon!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import styles from "./Programacoes.module.css";

export default function Programacoes() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((res) => setItems(res.data))
      .catch((err) => conscole.log(err));
  }, []);

  return (
    <>
      <section className="mt-4 pt-3 pb-3 mb-4 d-flex justify-content-center align-items-center text-center border-top border-bottom m-auto">
        <Container>
          <Row className="justify-content-center m-auto ">
            <Col md={4}>
              <h3>Community Outreach</h3>
              <p>
                We are committed to making a difference in our local community:
              </p>
              <ul style={{ listStyle: "none" }}>
                {items.map((item) => (
                  <li key={item.id}>
                    <a href="#" className={styles.link}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={4}>
              <h3>Ministries</h3>
              <p>We offer a variety of ministries for people of all ages:</p>
              <div style={{ listStyle: "none" }}>
                <div>Youth Group</div>
                <div>Women's Ministry</div>
                <div>Mission Trips</div>
                <div>And more!</div>
              </div>
            </Col>
            <Col md={4}>
              <h3>Get Involved</h3>
              <p>
                Ready to get involved in our church community? Here are some
                ways you can participate:
              </p>
              <div style={{ listStyle: "none" }}>
                <div>Join a small group</div>
                <div>Volunteer for a ministry</div>
                <div>Attend a special event</div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center m-auto">
            <Col md={4}>
              <h3>Community Outreach</h3>
              <p>
                We are committed to making a difference in our local community:
              </p>
              <div style={{ listStyle: "none" }}>
                <div>Food Bank</div>
                <div>Homeless Ministry</div>
                <div>Disaster Relief</div>
              </div>
            </Col>
            <Col md={4}>
              <h3>Our Beliefs</h3>
              <p>
                Learn more about what we believe and our mission as a church:
              </p>
              <div style={{ listStyle: "none" }}>
                <div>Statement of Faith</div>
                <div>Our Vision</div>
                <div>Our History</div>
              </div>
            </Col>
            <Col md={4} id="contact">
              <h3>Contact Us</h3>
              <p>
                Have a question or want to get in touch? Here's how to reach us:
              </p>
              <div style={{ listStyle: "none" }}>
                <div>Email: info@ourchurch.com</div>
                <div>Phone: (123) 456-7890</div>
                <a target={'_blank'}
                 href="https://www.google.com/maps/place/Santa+Ana+Broadway+Bilingual+Seventh-Day+Adventist+Church/@33.7563105,-117.8723321,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcd9aef218a4c5:0x7093cd34fed8bcc5!8m2!3d33.7562985!4d-117.8701436">
                  <div>Address: 123 Main St, Anytown USA</div>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

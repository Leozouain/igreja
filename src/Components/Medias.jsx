import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

import styles from "./Medias.module.css";

export default function Medias() {
  return (
    <>
      <section className={styles.container}>
        <a href="https://www.youtube.com" target={"_blank"}>
          <div
            className={styles.image}
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/500x500/?youtube')",
            }}
          >
            <span className={styles.imageText}>YOUTUBE</span>
          </div>
        </a>
        <a href="https://www.leadership.com" target={"_blank"}>
          <div
            className={styles.image}
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/500x500/?leadership')",
            }}
          >
            <span className={styles.imageText}>LEADERSHIP</span>
          </div>
        </a>
      </section>
    </>
  );
}

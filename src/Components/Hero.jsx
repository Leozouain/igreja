import React from 'react'
import { Container } from 'react-bootstrap';
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section id='home' className={styles.heroSection}>
      <div className={styles.heroImage}>
        <Container>
          <div className={styles.heroContent}>
            <h1>Welcome</h1>
            <p>Join us for worship, Bible study, and fellowship. All are welcome!</p>
            <a href="/visit" className={`btn btn-primary btn-lg ${styles.myBtn}`}>Plan Your Visit</a>
          </div>
        </Container>
      </div>
    </section>

    
  )
}

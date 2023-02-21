import { Button } from 'react-bootstrap';
import styles from './About.module.css'

export default function About() {
  return (
    <section id='aboutUs' className={styles.aboutSection}>
    <div className={styles.container}>
      <div className="row mt-5">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 pb-5">
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={`${styles.sectionDescription}`}> We believe in salvation through the grace of God and the importance of studying the Bible and living according to the teachings of Jesus Christ.</p>
          <Button variant="primary" href="/abouts">Learn More</Button>
        </div>
      </div>
    </div>
  </section>
  );
}
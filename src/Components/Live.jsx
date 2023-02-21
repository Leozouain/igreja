import React from "react";
import styles from "./Live.module.css";

export default function Live() {
  return (
    <div className={styles.container}>
      <div className="row d-flex align-items-center justify-content-center  ">
        <p>SERVICE</p>
        <p>Sunday at 9am <br/>Sunday at 11am <br/>Wednesday at 7pm</p>
      </div>
      <div className={` row d-flex align-items-center justify-content-center ${styles.cont}`}>
        <p>LOCATION</p>
        <a  className={styles.link}
            target={'_blank'}
             href="https://www.google.com/maps/place/Santa+Ana+Broadway+Bilingual+Seventh-Day+Adventist+Church/@33.7563105,-117.8723321,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcd9aef218a4c5:0x7093cd34fed8bcc5!8m2!3d33.7562985!4d-117.8701436">
                  <div>Address: 123 Main St, Anytown USA</div>
                </a>
      </div>
      <div className="row align-items-center">
        <a href="https://www.youtube.com/" target={"_blank"} className="btn btn-primary">
          LIVE SERMONS
        </a>
      </div>
    </div>
  );
}

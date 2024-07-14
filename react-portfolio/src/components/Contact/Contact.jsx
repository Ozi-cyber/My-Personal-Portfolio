import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/email.png")}
            className={styles.Image}
            alt="Email icon"
          />
          <a href="mailto:cedrickcalibog757@gmail.com">
            cedrickcalibog757@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedIn.png")}
            className={styles.Image}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/github.png")}
            className={styles.Image}
            alt="Github icon"
          />
          <a href="https://www.github.com/myname">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};

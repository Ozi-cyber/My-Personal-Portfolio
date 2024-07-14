import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi! I'm Ced</h1>
        <p className={styles.description}>
          I'm a Web Developer and Data Analyst with entry-level experience. I
          primarily utilize React for front-end development, while Python,
          Looker Studio, and Excel for Data Analysis.
        </p>
        <a
          href="mailto:cedrickcalibog757@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profPic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};

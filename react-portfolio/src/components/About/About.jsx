import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Pic the same with prof pic but  diff pose"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItemUL}>
          <li className={styles.aboutItems}>
            <img
              src={getImageUrl("about/web-icon.png")}
              alt="Web Dev Icon"
              className={styles.aboutIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I'm a Web Developer with experience and familiarity in creating
                responsive, and optimize websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItems}>
            <img
              src={getImageUrl("about/data-research.png")}
              alt="Data Analyst Icon"
              className={styles.aboutIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
                I'm also a Data Analyst with experience and familiarity in
                collecting, cleaning, and interpreting datasets to extract
                meaningful insights.
              </p>
            </div>
          </li>
          <li className={styles.aboutItems}>
            <img
              src={getImageUrl("about/VA-icon.png")}
              alt="VA Icon"
              className={styles.aboutIcon}
            />
            <div className={styles.aboutItemText}>
            <h3>Virtual Assistant</h3>
              <p>
                I'm also an aspiring Virtual Assitant with familiriaty in
                utilizing general VA tools such as Microsoft Suite and other AI
                tools which are prevalent in VA industry.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

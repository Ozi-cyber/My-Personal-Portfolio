import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title} data-aos="fade-up" data-aos-duration="1250" data-aos-anchor-placement="top-center">About</h2>
      <div className={styles.content}>
        <img
          data-aos="fade-up" data-aos-duration="1250" data-aos-anchor-placement="top-center"
          src={getImageUrl("about/aboutImage.png")}
          alt="Pic the same with prof pic but  diff pose"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItemUL}>
          <li className={styles.aboutItems} data-aos="fade-left" data-aos-duration="1250" data-aos-anchor-placement="top-center" data-aos-delay="50">
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
          <li className={styles.aboutItems} data-aos="fade-left" data-aos-duration="1250" data-aos-delay="150">
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
          <li className={styles.aboutItems} data-aos="fade-left" data-aos-duration="1250" data-aos-delay="250">
            <img
              src={getImageUrl("about/instructor.png")}
              alt="Instructor Icon"
              className={styles.aboutIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Instructor</h3>
              <p>
                I can also instruct or tutor; I am confident in my ability to share my knowledge in the Computer Science field.
              </p>
            </div>
          </li>
          <li className={styles.aboutItems} data-aos="fade-left" data-aos-duration="1250" data-aos-delay="350">
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

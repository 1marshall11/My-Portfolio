import React from 'react'
import {getImageUrl} from  "../../utils";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>
      Welcome! I'm Mayur
      </h1>
      <p className={styles.description}>As a enthusiastic student, I'm eager to explore and embrace new technologies.</p>
      <a href="mailto:mayurrarthour521@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
      <img src={getImageUrl("hero/boy.png")} alt="Profile" className={styles.heroImg}/>
       <div className={styles.topBlur}> </div>
       <div className={styles.bottomBlur}> </div>


  </section>
  )
}

export default Hero

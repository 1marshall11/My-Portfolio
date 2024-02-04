import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to Contact me</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/mail.png")} alt="mymail"/>
                <div className={styles.gmail}>
                <a href="mailto:mayurrarthour521@gmail.com">Gmail</a>
                </div>
                
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/github.png")} alt="mygithub" />
                <div  className={styles.github}>
                <a href="https://github.com/1marshall11">Github</a>
                </div>
                
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} alt="mylinkedin" />
                <div className={styles.linkedin}>
                <a href="https://www.linkedin.com/in/mayur-singh-rathore-b853b2144/">Linkedin</a>
                </div>
               
            </li>
        </ul>
    
    </footer>
  )
}

export default Contact

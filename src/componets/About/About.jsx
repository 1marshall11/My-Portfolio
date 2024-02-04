import React from 'react'
import {getImageUrl} from  "../../utils";
import style from "./About.module.css";
const About = () => {
  return (
        <section className={style.container} id="about">
            <h2 className={style.title}>ABOUT</h2>
            <div className={style.content}>  
                <img src={getImageUrl("about/a_man.png")} alt="me" className={style.aboutimg} />
            <ul className={style.aboutItems}> 
                <li className={style.aboutItem}>
                    <div className={style.odoo}><img src={getImageUrl("about/odoo.png")} alt="odoo" /></div>
                    <div className={style.aboutItemText}>
                        <h3>Experienced Odoo Developer</h3>
                        <p>With a solid 4-month tenure as an Odoo developer, 
                            I bring expertise in crafting responsive and optimized websites.
                             My journey involves navigating the intricacies of Odoo development 
                             to deliver seamless and efficient solutions.</p>
                    </div>
                </li>
                <li className={style.aboutItem}>
                    <div className="cursorimg"><img src={getImageUrl("about/frontend.png")} alt="cursor" /></div>
                    <div className={style.aboutItemText}>
                        <h3>Passionate Frontend Developer</h3>
                        <p>Fueled by a keen interest in the captivating world of frontend development, 
                            I have dedicated countless hours to crafting compelling website experiences. 
                            My portfolio is adorned with a multitude of projects that showcase my proficiency 
                            in translating ideas into visually stunning and user-friendly interfaces.</p>
                    </div>
                </li>
                <li className={style.aboutItem}>
                    <div className="networkimg"><img src={getImageUrl("about/network1.png")}alt="network" /></div>
                    <div className={style.aboutItemText}>
                        <h3>Cybersecurity Enthusiast with Proficient Networking Skills</h3>
                        <p>Embarking on a journey as a cybersecurity student, I possess an 
                            intermediate level of knowledge in networking, weaving together the intricate threads that 
                            form the backbone of secure digital landscapes. </p>
                    </div>
                </li>
            </ul>
            </div>

        </section>
    
  )

}

export default About

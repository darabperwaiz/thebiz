import React from 'react'
import style from './corevalues.module.css'
import SmallCard from "../smallcard/SmallCard"
import { AnimatePresence, motion } from "framer-motion"

const Corevalues = () => {
  return (
    <div className={style.coreValues}>
      <div className={style.top}>
        <motion.p className={style.title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          easings: ['easeIn', 'easeOut'], // smoother easing
        }}
        viewport={{ amount: 0.5, once: true }}
        >Our <span>Core</span> Values</motion.p>
      </div>
      <div className={style.bottom}>
        <AnimatePresence>
        <div className={style.left}>
        <SmallCard key={1} title={"Innovation"} des={"We are committed to staying at the forefront of technological advancements and providing innovative solutions that drive business growth"} icon="tips_and_updates_black_24dp 1.svg"/>
        <SmallCard key={2} title={"Excellence"} des={"We strive for excellence in everything we do, delivering high-quality services and exceeding client expectations."} icon="stars_black_24dp 1.svg"/>
        <SmallCard key={3} title={"Collaboration"} des={"We believe in the power of collaboration and teamwork, working closely with our clients to achieve shared goals and objectives."} icon="handshake_black_24dp 1.svg"/>
        <SmallCard key={4} title={"Integrity"} des={"We conduct our business with honesty, transparency, and integrity, building trust and credibility with our clients."} icon="verified_user_black_24dp 1.svg"/>
        <SmallCard key={5} title={"Project Timeline"} des={"We understand the value of time and money for a  business growth , So , we complete the projects within given time frame."} icon="timeline_black_24dp 1.svg"/>
        <SmallCard key={6} title={"Customer Focus"} des={"We are dedicated to understanding and meeting the unique needs of each client, providing personalized service and support."} icon="center_focus_strong_black_24dp 1.svg"/>
        </div>
        </AnimatePresence>
        {/* <div className={style.right}>
        
        </div> */}
      </div>
    </div>
  )
}

export default Corevalues

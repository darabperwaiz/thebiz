"use client"

import React from "react";
import style from "./contact.module.css";
import { LuMail } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6"
import Link from "next/link";
import { Button } from "../Button/Button";
import { AnimatePresence, motion } from "framer-motion";


const Contact = () => {
  return (
    <AnimatePresence>
    <div className={style.contact}>
      <motion.div
      initial={{opacity: 0, x: 300}}
      whileInView={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -300}}
      transition={{duration: 0.5}}
      className={style.left}>
        <div className={style.topLeft}>
          <p className={style.head}>Contact Us</p>
          <p className={style.title}>
            Ready To Take Your <span>Next Step?</span>
          </p>
        </div>
        <p className={style.des}>
          Let me know your digitally need for your business and{" "}
          <span>we will contact you within 6 hr.</span>
        </p>
        <div className={style.midLeft}>
          <div className={style.rating}>
            <p>95%</p>
            <p>Client Recurring Rate</p>
          </div>
          <div className={style.rating}>
            <p>452</p>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className={style.botLeft}>
          <Link className={style.link} href="mailto:info@thebiztechnology.com">
            <LuMail style={{ color: "orange" }} />{" "}
            <span>info@thebiztechnology.com</span>
          </Link>
          <Button text={"Get A Proposal"} />
        </div>
      </motion.div>
      <motion.div
      initial={{opacity: 0, x: -300}}
      whileInView={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: 300}}
      transition={{duration: 0.5}}
      className={style.right}>
        <div className={style.rightTop}>
          <p>More About you</p>
          <p>Fill out the contact form and we&apos;ll get in touch with you shortly.</p>
        </div>
        <form action="" className="scheduleForm">
          <input className={style.input} type="text" placeholder="Your Name"/>
          <input className={style.input} type="text" placeholder="Your Phone"/>
          <input className={style.input} type="text" placeholder="Your Email Address"/>
          <select value={'DEFAULT'} onChange={(e)=> e.target.value} className={style.input} name="services" id="">
            <option value="">Select A Services</option>
            <option value="seo">SEO</option>
            <option value="smo">SMO</option>
            <option value="gmb">GMB</option>
            <option value="crm">CRM</option>
            <option value="app development">App Development</option>
            <option value="website development">Website Development</option>
            <option value="link building">Link Building</option>
            <option value="content writing">Content Writing</option>
            <option value="sales funnel fixing">Sales Funnel Fixing</option>
            <option value="website annual maintenance">Website Annual Maintenance</option>
          </select>
          <textarea className={style.input} name="" id="" placeholder="Your messages"></textarea>
        </form>
        <button className={style.button}>Schedule Now <span><FaArrowRightLong /></span></button>
      </motion.div>
    </div>
    </AnimatePresence>
  );
};

export default Contact;

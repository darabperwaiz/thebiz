"use client"


import style from "./testimonial.module.css";
import { TbAntennaBars5 } from "react-icons/tb";
import { IoIosWifi } from "react-icons/io";
import { IoBatteryFullOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import Image from "next/image";
import TrustedBrands from "../trustedbrands/TrustedBrands";
import PrimaryButton from "../primaryButton/PrimaryButton";
import { motion } from "framer-motion";

const Testimonial = () => {
  const vid = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handlePlay = () => {
    if (isPlaying) {
      vid.current.pause();
      setIsPlaying(false);
    } else {
      vid.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className={style.testimonial}>
      <motion.div
      initial={{ x: -200, opacity: 0 }} // Initial state (offscreen and hidden)
      whileInView={{ x: 0, opacity: 1 }} // Target state when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
      viewport={{ once: true, amount: 0.5 }} // Trigger animation once, when 20% of the box is in view
      
      className={style.left}>
        <p>Testimonial</p>
        <p>
          What <span>Clients</span> Say About Our Services
        </p>
      </motion.div>
      <motion.div
      initial={{ y: 200, opacity: 0 }} // Initial state (offscreen and hidden)
      whileInView={{ y: 0, opacity: 1 }} // Target state when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
      viewport={{ once: true, amount: 0.5 }} // Trigger animation once, when 20% of the box is in view
      
      className={style.mid}>
        <div className={style.outer}>
          <div className={style.inner}>
            <video
              ref={vid}
              className={style.clientVideo}
              src="/assets/video/client_video.mp4"
              width={300}
              height={900}
              autoPlay={true}
              muted={isMuted ? true : false}
              loop
            >
              {/* <source  type="video/mp4"/> */}
            </video>
            <div className={style.controls}>
              <div className={style.control}>
                {isPlaying ? (
                  <FaRegPauseCircle onClick={handlePlay} />
                ) : (
                  <FaRegPlayCircle onClick={handlePlay} />
                )}
                {/* {isMuted ? <GiSpeakerOff className={style.speaker} onClick={handleMute} />: <GiSpeaker className={style.speaker} onClick={handleMute}/>} */}
              </div>
            </div>
            <div className={style.dIsland}>
              <div className={style.notification}></div>
              <div className={style.camera}>
                <div className={style.cameraOuter}>
                  <div className={style.cameraInner}></div>
                </div>
              </div>
            </div>
            <div className={style.icons}>
              <TbAntennaBars5 />
              <IoIosWifi />
              <IoBatteryFullOutline />
            </div>
            <div className={style.clock}>9:41</div>
            <div className={style.navBar}></div>
          </div>
        </div>
      </motion.div>
      <motion.div
      initial={{ x: 200, opacity: 0 }} // Initial state (offscreen and hidden)
      whileInView={{ x: 0, opacity: 1 }} // Target state when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
      viewport={{ once: true, amount: 0.5 }} // Trigger animation once, when 20% of the box is in view
      
      
      className={style.right}>
        <div className={style.rightTop}>
          <Image
            className={style.quote}
            src="/assets/images/quoteLeft.svg"
            alt=""
            height={20}
            width={20}
          />
          <p>
            A versatile programming language used for creating interactive and
            dynamic content on websites, known for its widespread adoption and
            compatibility across different web browsers.A versatile programming
            language used for creating interactive and dynamic content on
            websites,{" "}
          </p>
          <div className={style.rightMid}>
            <Image
              className={style.quote}
              src="/assets/images/quoteRight.svg"
              alt=""
              height={20}
              width={20}
            />
            <div className={style.midMid}>
              <div className={style.ceo}>
                <Image
                  className={style.markImg}
                  src="/assets/images/mark.webp"
                  alt="mark"
                  height={100}
                  width={100}
                />
                <div className={style.label}>
                  <p>Mark Brown</p>
                  <p>CEO - Reliable Trust</p>
                </div>
              </div>
              <Image
                src="/assets/images/google.svg"
                alt=""
                height={40}
                width={40}
              />
            </div>
          </div>
        </div>
        <TrustedBrands />
        <PrimaryButton text={"View All reviews"} />
      </motion.div>
    </div>
  );
};

export default Testimonial;

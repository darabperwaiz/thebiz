"use client"

import React, { useEffect, useState } from 'react'
import style from './header.module.css'
import Navbar from "./Navbar/Navbar"
import { FaArrowUp } from "react-icons/fa6";
import Logo from "./Logo/Logo";

const Header = () => {
    const [show, setShow] = useState(true)
    const [activeClass, setActiveClass] = useState(style.active)
    // const [width, setWidth] = useState(indow?.innerWidth);
    const [showUp, setShowUp] = useState(false)
  
  
    useEffect(() => {
     
    //   if(width<= 768) {
    //     setActiveClass(style.top)
    //   } else {
    //     setActiveClass(style.active)
    //   }
  
    //   const handleResize = () => setWidth(window.innerWidth);
    //   window.addEventListener("resize", handleResize);
      
      let previousScrollPosition = 0;
      let currentScrollPosition = 0;
  
      window.addEventListener('scroll', function (e) {
  
        // Get the new Value
        currentScrollPosition = window.scrollY;
  
        //Subtract the two and conclude
        if (previousScrollPosition - currentScrollPosition < 0) {
          setShow(false);
        } else if (previousScrollPosition - currentScrollPosition > 0) {
          setShow(true);
        }
  
        // Update the previous value
        previousScrollPosition = currentScrollPosition;
      });
  
    //   return () => window.removeEventListener("resize", handleResize);
    }, []);
  
  
    useEffect(()=> {
      window.addEventListener('scroll', ()=> {
        if(window.scrollY > 600) {
          setShowUp(true)
        } else {
          setShowUp(false)
        }
      })
    },[])
  
  
    const handleScrollUp = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
  
    }
  
  return (
    <>
      <header className={show ? `${style.header} ${activeClass}` : style.header}
   

    >
      <div className={style.nav}>
      <Logo />
      <Navbar />
      </div>
    </header>
    <div onClick={handleScrollUp} className={showUp ? `${style.scrollUp} ${style.scrollUpActive}`: style.scrollUp}><FaArrowUp /></div>
    </>
  )
}

export default Header

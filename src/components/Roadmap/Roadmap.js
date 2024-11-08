import React, { useEffect } from 'react'
import style from './roadmap.module.css'
import { MdFlight } from "react-icons/md"

const Roadmap = () => {

  useEffect(()=> {
    const handleScroll = () => {
      const elements = document.querySelectorAll(`.${style.timelineBox}`)
      console.log(elements)

      elements.forEach((el)=> {
        const rect = el.getBoundingClientRect()
        const windowHeight = window.innerHeight

        const isHalfVisible = rect.top >= 0 && rect.bottom <= windowHeight;

        if(isHalfVisible ) {
          el.classList.add(style.visible)
        }
        else {
          el.classList.remove(style.visible)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={style.Roadmap}>
      <p className={style.title}>Development <br/><span>Roadmap</span></p>
    <section className={style.timeline}>
            <div className={style.timelineBox}>
              <div className={style.timelineBoxHead}>
                <p>Consulation & Assisment</p>
              </div>
              <div className={style.timelineBoxDes}>
                <p>our platform is meticulously crafted to equip you with indispensable knowledge.</p>
              </div>
            </div>
            <div className={style.timelineBox}>
              <div className={style.timelineBoxHead}>
                <p>Analysis & Planning</p>
              </div>
              <div className={style.timelineBoxDes}>
                <p>our platform is meticulously crafted to equip you with indispensable knowledge.</p>
              </div>
            </div>
            <div className={style.timelineBox}>
              <div className={style.timelineBoxHead}>
                <p>Implemetation</p>
              </div>
              <div className={style.timelineBoxDes}>
                <p>We begin by understanding your organization's digitally needs, challenges, and goals through an initial consultation. This helps us tailor our services to your specific requirements.</p>
              </div>
            </div>
            <div className={style.timelineBox}>
              <div className={style.timelineBoxHead}>
                Quality Testing
              </div>
              <div className={style.timelineBoxDes}>
                <p>our platform is meticulously crafted to equip you with indispensable knowledge.</p>
              </div>
            </div>
            <div className={style.timelineBox}>
              <div className={style.timelineBoxHead}>
                CMS Training
              </div>
              <div className={style.timelineBoxDes}>
                <p>our platform is meticulously crafted to equip you with indispensable knowledge.</p>
              </div>
            </div>
            <div className={style.timelineBox}>
              <div className={style.timelineBoxHead}>
                Support & Maintenance
              </div>
              <div className={style.timelineBoxDes}>
                <p>our platform is meticulously crafted to equip you with indispensable knowledge.</p>
              </div>
            </div>
            <div className={style.timelineDivider}>
              <div className={style.timeTraveller}>
              <MdFlight />
              </div>
            </div>
          </section>
          </div>
  )
}

export default Roadmap

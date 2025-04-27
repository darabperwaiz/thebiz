
import React from 'react'
import style from './roadmap.module.css'
import Image from "next/image"
import HoverIcon from "./HoverIcon/HoverIcon"
// import { MdFlight } from "react-icons/md"
import Motion from "../Motion/Motion"

const Roadmap = ({data}) => {
  return (
    <div className={style.roadmap}>
      <Motion>
      <div className={style.title}>
        <p>Development</p>
        <p>Roadmap</p>
      </div>
      </Motion>
      <div className={style.bottom}>
            <Image src="/assets/images/brandIcons/curve_rainbow.png" alt="" width={400} height={300}/>
            {data.map((item, index)=> (
              <div className={style[`icon${index + 1}`]} key={index}>
              <HoverIcon p1={item.title} p2={item.description} icon={item.icon} bgColor={item.bgColor}/>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Roadmap
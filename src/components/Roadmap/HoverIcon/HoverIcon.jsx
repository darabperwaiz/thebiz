import React from "react";
import style from "./hoverIcon.module.css";
import Image from "next/image";

const HoverIcon = ({p1, p2, icon, bgColor}) => {
  return (
    <div className={style.hoverIcon}>
      <p>{p1}</p>
      <div className={style.verticleLine}></div>
      <div className={style.circle}>
        <div className={style.innerCircle} style={{backgroundColor: `${bgColor}`}}>
          <Image
            className={style.icon}
            src={`/assets/images/roadmapIcons/${icon}`}
            alt=""
            width={200}
            height={200}
          />
        </div>
      </div>
      <p>{p2}</p>
    </div>
  );
};

export default HoverIcon;

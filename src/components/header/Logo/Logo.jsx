import React from 'react'
import style from './logo.module.css'
import Image from "next/image"

const Logo = () => {
  return (
    <div className={style.logo}>
      <Image src="/assets/images/logo.webp" width={126} height={88} alt=""/>
    </div>
  )
}

export default Logo

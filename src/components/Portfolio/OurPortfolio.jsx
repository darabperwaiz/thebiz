// import React, { useMemo, useState } from 'react'
import style from './ourportfolio.module.css'
import PrimaryButton from "../primaryButton/PrimaryButton"
import Porfolios from "../porfolios/Porfolios"


const OurPortfolio = () => {
  
  return (
    <div className={style.OurPortfolio}>
      <div className={style.top}>
        <div>
            <p className={style.head}>Our <span>Portfolio</span></p>
        </div>
      </div>
      <Porfolios />
      <div className={style.bottom}>
        <PrimaryButton text={"View our all projects"}/>
      </div>
    </div>
  )
}

export default OurPortfolio


import React from 'react'
import style from './outcome.module.css'
import OutCard from "../OutCard/OutCard"


const Outcome = ({data}) => {
  return (
    <div className={style.outcome}>
        <p><span>Outcome</span> Results<br />Estimate</p>
      <div className={style.bottom}>
        {data.map((item, index) => (
          <OutCard title={item.title} description={item.description} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Outcome

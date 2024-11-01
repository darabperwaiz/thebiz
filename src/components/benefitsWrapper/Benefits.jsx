import React from 'react'
import style from './benefits.module.css'

const Benefits = ({children}) => {
  return (
    <div className={style.benefits}>
      <div className={style.left}>
        <div className={style.leftTop}>
            <p>Benefits</p>
            <p>The design <span>subscription</span> that<br />connects you to your dream team</p>
        </div>
        <p className={style.des}>Our SEO services are designed to elevate your online presence and drive tangible results. We begin  with a comprehensive analysis, identifying opportunities for improvement and tailoring a strategy to  align with your business goals. Through meticulous keyword research and on-page optimization, we  ensure your content ranks high on search engines, attracting the right audience.</p>
      </div>
      {children}
    </div>
  )
}

export default Benefits

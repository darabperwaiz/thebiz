import React from 'react'
import style from './benefits.module.css'

const Benefits = ({children, tag, title, des}) => {
  return (
    <div className={style.benefits}>
      <div className={style.left}>
        <div className={style.leftTop}>
            <p>{tag}</p>
            <p>{title}</p>
        </div>
        <p className={style.des}>
          {des}
        </p>
      </div>
      {children}
    </div>
  )
}

export default Benefits

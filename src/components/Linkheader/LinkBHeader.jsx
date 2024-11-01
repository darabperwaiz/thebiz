import React from 'react'
import style from './linkbheader.module.css'

const LinkBHeader = ({title, description}) => {
  return (
    <section className={style.LinkBHeader}>
        <div className="container">
            <div className={style.left}>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
        <div className={style.cornerImage}>
            <img src="/assets/images/corner.svg" alt="" width={500} height={500}/>
            {/* <div className={style.rectangle}></div> */}
        </div>
    </section>
  )
}

export default LinkBHeader

'use client'

import React, { useState } from 'react'
import style from './seopackage.module.css'
import MainTable from "./MainTable/MainTable"

const Seopackage = () => {
  const [tab, setTab] = useState(2)

  return (
    <div className={style.Seopackage}>
      <div className={style.navigator}>
        <div onClick={() => setTab(1)} className={tab === 1 ? `${style.tab1} ${style.active}` : style.tab1}>
          Local Seo Packages
        </div>
        <div onClick={() => setTab(2)} className={tab === 2 ? `${style.tab2} ${style.active}` : style.tab2}>
          Seo Packages
        </div>
        <div onClick={() => setTab(3)} className={tab === 3 ? `${style.tab3} ${style.active}` : style.tab3}>
          Ecom. Seo Packages
        </div>
      </div>
      <div className={style.bottom}>
        {tab === 1 && <MainTable title="National SEO Packages"/>}
        {tab === 2 && <MainTable title="SEO Packages"/>}
        {tab === 3 && <MainTable title="Ecom SEO Packages"/>}
        
      </div>
    </div>
  )
}

export default Seopackage

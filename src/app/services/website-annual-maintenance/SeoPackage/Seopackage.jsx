'use client'

import React, { useState } from 'react'
import style from './seopackage.module.css'

import { motion, AnimatePresence } from "framer-motion";
import TableOne from "./TableOne/TableOne";
import TableTwo from "./TableTwo/TableTwo";
import TableThree from "./TableThree/TableThree";


const Seopackage = () => {
  const [tab, setTab] = useState(1)

  return (
    <div className={style.Seopackage}>
      <div className={style.navigator}>
        <div onClick={() => setTab(1)} className={tab === 1 ? `${style.tab} ${style.active}` : style.tab}>
          Maintenance Packages
        </div>
        {/* <div onClick={() => setTab(2)} className={tab === 2 ? `${style.tab} ${style.active}` : style.tab}>
          Seo Packages
        </div>
        <div onClick={() => setTab(3)} className={tab === 3 ? `${style.tab} ${style.active}` : style.tab}>
          Ecom. Seo Packages
        </div> */}
      </div>
      <div className={style.bottom}>
        <AnimatePresence mode="wait">
        {tab === 1 && (
          <motion.div
          key="tab1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          >
            <TableOne title="Maintenance Package"/>
          </motion.div>
        )}
       
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Seopackage

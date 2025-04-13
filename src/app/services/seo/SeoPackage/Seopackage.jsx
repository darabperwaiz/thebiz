'use client'

import React, { useState } from 'react'
import style from './seopackage.module.css'

import { motion, AnimatePresence } from "framer-motion";
import TableOne from "./TableOne/TableOne";
import TableTwo from "./TableTwo/TableTwo";
import TableThree from "./TableThree/TableThree";


const Seopackage = () => {
  const [tab, setTab] = useState(2)

  return (
    <div className={style.Seopackage}>
      <div className={style.navigator}>
        <div onClick={() => setTab(1)} className={tab === 1 ? `${style.tab} ${style.active}` : style.tab}>
          Local Seo Packages
        </div>
        <div onClick={() => setTab(2)} className={tab === 2 ? `${style.tab} ${style.active}` : style.tab}>
          Seo Packages
        </div>
        <div onClick={() => setTab(3)} className={tab === 3 ? `${style.tab} ${style.active}` : style.tab}>
          Ecom. Seo Packages
        </div>
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
            <TableOne title="Local SEO Packages"/>
          </motion.div>
        )}
        {tab === 2 && (
          <motion.div
          key="tab2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          >
            <TableTwo title="National SEO Packages"/>
          </motion.div>
        )}
        {tab === 3 && (
          <motion.div
          key="tab3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          >
            <TableThree title="Ecom SEO Packages"/>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Seopackage

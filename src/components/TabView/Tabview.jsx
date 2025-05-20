// "use client"

// import React, { useState } from 'react'
// import style from './tabview.module.css'
// import { servicesData } from "./servicesData"
// import { digitalData } from "./digitalData"
// import { Card } from "../Card/Card"
// import { AnimatePresence, motion } from "framer-motion"
// import ScrollAnimationBox from "../ScrollAnimationBox"

// const Tabview = () => {
//     const [toggleState, setToggleState] = useState(1)

//     const handleTab = (e, index) => {
//         setToggleState(index)
//         console.log(index, e)
//     }

    
//   return (
//     <ScrollAnimationBox>
//     <div className={style.tabsWrapper}>
//     <div className={style.tabs}>
//       <div onClick={(e)=> handleTab(e, 1)} className={toggleState === 1 ? `${style.tab} ${style.active}`: `${style.tab}`}>Design Services {toggleState === 1 ? (<motion.div className={style.underline} layoutId={style.underline}/>) : null}</div>
//       <div onClick={(e)=> handleTab(e, 2)} className={toggleState === 2 ? `${style.tab} ${style.active}`: `${style.tab}`}>Digital Marketing {toggleState === 2 ? (<motion.div className={style.underline} layoutId={style.underline}/>) : null}</div>
//     </div>
//     <AnimatePresence mode="wait">
//     {toggleState === 1 && (
//       <motion.div
//       key="tab1"
//       className={style.content}
//       >
//           {servicesData.map((item, index)=> (
//               <Card data={item} index={index} key={index}/>
//           ))}
//       </motion.div>
//     )}
//     {toggleState === 2 && (
//       <motion.div
//       key="tab2"
//       className={style.content}
//       >
//           {digitalData.map((item, index)=> (
//               <Card data={item} index={index} key={index}/>
//           ))}
//       </motion.div>
//     )}
//     </AnimatePresence>
//     </div>
//     </ScrollAnimationBox>
//   )
// }

// export default Tabview

// Tabview.jsx

"use client"

import React, { useState } from 'react'
import style from './tabview.module.css'
import { servicesData } from "./servicesData"
import { digitalData } from "./digitalData"
import { Card } from "../Card/Card"
import { AnimatePresence, motion } from "framer-motion"
import ScrollAnimationBox from "../ScrollAnimationBox"

const Tabview = () => {
    const [toggleState, setToggleState] = useState(1)
    const [activeCardIndex, setActiveCardIndex] = useState(1)

    const handleTab = (index) => {
        setToggleState(index)
        setActiveCardIndex(null) // Reset active card when switching tabs
    }

    const handleCardClick = (index) => {
        setActiveCardIndex(activeCardIndex === index ? null : index)
    }

    return (
        <ScrollAnimationBox>
            <div className={style.tabsWrapper}>
                <div className={style.tabs}>
                    <div 
                        onClick={() => handleTab(1)} 
                        className={toggleState === 1 ? `${style.tab} ${style.active}` : `${style.tab}`}
                    >
                        Design Services 
                        {toggleState === 1 && <motion.div className={style.underline} layoutId={style.underline}/>}
                    </div>
                    <div 
                        onClick={() => handleTab(2)} 
                        className={toggleState === 2 ? `${style.tab} ${style.active}` : `${style.tab}`}
                    >
                        Digital Marketing 
                        {toggleState === 2 && <motion.div className={style.underline} layoutId={style.underline}/>}
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    {toggleState === 1 && (
                        <motion.div
                            key="tab1"
                            className={style.content}
                        >
                            {servicesData.map((item, index) => (
                                <Card 
                                    data={item} 
                                    index={index} 
                                    key={index}
                                    isActive={activeCardIndex === index}
                                    onClick={handleCardClick}
                                />
                            ))}
                        </motion.div>
                    )}
                    {toggleState === 2 && (
                        <motion.div
                            key="tab2"
                            className={style.content}
                        >
                            {digitalData.map((item, index) => (
                                <Card 
                                    data={item} 
                                    index={index} 
                                    key={index}
                                    isActive={activeCardIndex === index}
                                    onClick={handleCardClick}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ScrollAnimationBox>
    )
}

export default Tabview

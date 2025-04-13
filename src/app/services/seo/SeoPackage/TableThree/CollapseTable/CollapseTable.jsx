'use client'

import React, { useState } from 'react'
import style from './collapsetable.module.css'
import { IoIosArrowDown } from "react-icons/io"
import { FaCheck } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5"



const CollapseTable = () => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
        console.log(isActive)
    }
  return (
    <div className={style.CollapseTable}>
      <div className={style.head} onClick={handleClick}>
        <p>Initial Review And Analysis <IoIosArrowDown /> </p>
      </div>
      <div className={isActive ? `${style.table} ${style.active}`: style.table}>
      <table className={style.optionsTable}>
        {/* Row 1 */}
        <tr className={style.row}>
            <td>
                Canonicalization
            </td>
            <td><FaCheck /></td>
            <td><FaCheck /></td>
            <td><FaCheck style={{color: "#0AB51B"}}/></td>
            <td><FaCheck /></td>
        </tr>
        {/* Row 2 */}
        <tr className={style.row}>
            <td>
                Header (H1) Tags Optimization
            </td>
            <td><FaCheck /></td>
            <td><FaCheck /></td>
            <td><FaCheck style={{color: "#0AB51B"}}/></td>
            <td><FaCheck /></td>
        </tr>
        {/* Row 3 */}
        <tr className={style.row}>
            <td>
                Internal Link Structuring & Optimization
            </td>
            <td><FaCheck /></td>
            <td><FaCheck /></td>
            <td><FaCheck style={{color: "#0AB51B"}}/></td>
            <td><FaCheck /></td>
        </tr>
        {/* Row 4 */}
        <tr className={style.row}>
            <td>
                Existing Content Optimization
            </td>
            <td><IoCloseSharp style={{fontSize: "22px", fontWeight: "bolder", color: "red"}}/></td>
            <td><FaCheck /></td>
            <td><FaCheck style={{color: "#0AB51B"}}/></td>
            <td><FaCheck /></td>
        </tr>
        {/* Row 5 */}
        <tr className={style.row}>
            <td>
                Robots.Txt Creation/Analysis
            </td>
            <td><FaCheck /></td>
            <td><FaCheck /></td>
            <td><FaCheck style={{color: "#0AB51B"}}/></td>
            <td><FaCheck /></td>
        </tr>
      </table>
      </div>
    </div>
  )
}

export default CollapseTable

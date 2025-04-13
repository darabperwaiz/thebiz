'use client'

import React, { useState } from 'react'
import style from './collapsetable.module.css'
import { IoIosArrowDown } from "react-icons/io"
import { FaCheck } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5"
import { FaXmark } from "react-icons/fa6";


const CollapseTable = ({data}) => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }
  return (
    <div className={style.CollapseTable}>
      <div className={style.head} onClick={handleClick}>
        <p>{data.title} <IoIosArrowDown /> </p>
      </div>
      <div className={isActive ? `${style.table} ${style.active}`: style.table}>
      <table className={style.optionsTable}>
        {/* Row 1 */}
        <tbody>
        {Object.keys(data).slice(1).map((key, index)=> (
            <tr className={style.row} key={index}>
            <td>
                {key}
            </td>
            {data[key].map((k, index)=> (
                <td key={index}>{k=='check' ? <FaCheck /> : k=='uncheck' ? <FaXmark style={{color: "red"}}/> : k}</td>
            ))}
        </tr>
        
        ))}
        </tbody>

      </table>
      </div>
    </div>
  )
}

export default CollapseTable


import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import style from './menuitem.module.css'
import MenuDropdown from "../MobileDropdown/MenuDropdown";

const MenuItem = ({menus, setIsActive}) => {
    const [isDropdown, setIsDropdown] = useState(false);
    const handleDropdown = () => {
        setIsDropdown(!isDropdown)
    }
  return (
    <>
    {
        menus.submenu ? (
            <>
                <a className={style.item} href="#" onClick={handleDropdown}>{menus.title} {isDropdown? <FaAngleUp /> : <FaAngleDown />}</a>
                <MenuDropdown submenus={menus.submenu} dropdown={isDropdown} setIsActive={setIsActive}/>
            </>
        ) : (
            <a className={style.item}  href={`/${menus.url}`} onClick={()=> setIsActive(false)}>{menus.title}</a>
        )
    }
      
    </>
  )
}

export default MenuItem

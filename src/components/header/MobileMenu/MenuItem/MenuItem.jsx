
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import style from './menuitem.module.css'
import MenuDropdown from "../MobileDropdown/MenuDropdown";
import Link from "next/link";

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
                <Link className={style.item} href="#" onClick={handleDropdown}>{menus.title} {isDropdown? <FaAngleUp /> : <FaAngleDown />}</Link>
                <MenuDropdown submenus={menus.submenu} dropdown={isDropdown} setIsActive={setIsActive}/>
            </>
        ) : (
            <Link className={style.item}  href={`/${menus.url}`} onClick={()=> setIsActive(false)}>{menus.title}</Link>
        )
    }
      
    </>
  )
}

export default MenuItem

"use client"
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import style from './navItem.module.css'
import Dropdown from "./Dropdown/Dropdown";

const NavItem = ({menus}) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const onMouseEnter = () => {
   setIsDropdown(true);
  }
  const onMouseLeave = () => {
   setIsDropdown(false);
  }
  return (
    <>
      {menus.submenu ? (
        <>
        <a className={style.menuItems} href="#" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{menus.title} {isDropdown? <FaAngleUp /> : <FaAngleDown />}</a>
        <Dropdown submenus={menus.submenu} isDropdown={isDropdown} setIsDropdown={setIsDropdown}/>
        </>
      ):(
        <a className={style.menuItems} href={`/${menus.url}`}>{menus.title}</a>
      )}
    </>
  )
}

export default NavItem

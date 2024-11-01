import React from 'react'
import style from "./dropdown.module.css"

const Dropdown = ({submenus, isDropdown, setIsDropdown}) => {
  const onMouseEnter = () => {
    setIsDropdown(true);
   }
   const onMouseLeave = () => {
    setIsDropdown(false);
   }
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${style.dropdown} ${isDropdown ? style.show : ''}`}>
     {submenus.map((submenu, index)=> (
      <a href={`/services/${submenu.url}`} key={index}>{submenu.title}</a>
     ))}
    </div>
  )
}

export default Dropdown

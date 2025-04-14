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
      <div className={style.menusWrapper} key={index}>
        <p>{submenu.title}</p>
        <div className={style.menuItems}>
        {submenu.menuItems.map((item, index)=> (
          <a href={`/services/${item.url}`} key={index}>{item.title}</a>
        ))}
        </div>
        
      </div>
      
     ))}
    </div>
  )
}

export default Dropdown

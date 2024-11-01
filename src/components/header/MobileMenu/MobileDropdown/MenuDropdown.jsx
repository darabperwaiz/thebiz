import React from 'react'
import style from './menudropdown.module.css'

const MenuDropdown = ({submenu, dropdown, setIsActive}) => {
  return (
    <>

    <div className={dropdown ? `${style.submenu} ${style.active}` : `${style.submenu}`}>
      {submenu.map((item, index)=> (
        <a href={`/services/${item.url}`} className={style.submenuItem} key={index} onClick={()=> setIsActive(false)}>{item.title}</a>
      ))}
    </div> 
    
    </>
  )
}

export default MenuDropdown

import React from 'react'
import style from './menudropdown.module.css'

const MenuDropdown = ({submenus, dropdown, setIsActive}) => {
  return (
    <>

    <div className={dropdown ? `${style.submenu} ${style.active}` : `${style.submenu}`}>
      {submenus.map((submenu, index)=> (
        <div className={style.menusWrapper} key={index}>
        <p>{submenu.title}</p>
        <div className={style.menuItems}>
        {submenu.menuItems.map((item, index)=> (
          <a href={`/services/${item.url}`} className={style.submenuItem} key={index} onClick={()=> setIsActive(false)}>{item.title}</a>
        ))}
        </div>
        
      </div>
        
      ))}
    </div> 
    
    </>
  )
}

export default MenuDropdown

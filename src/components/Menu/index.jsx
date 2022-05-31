import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'

const Menu = ({ header, items, active, setActive }) => {
    return (
        <div className={active ? 'menu__active' : 'menu' } onClick={() => setActive(false)}>
            <div className="blur">
                <div className="menu__content" onClick={e=> e.stopPropagation()}>
                    <div className="menu__header">
                        {header}
                    </div>
                    <ul> {items.map((item, index) =>
                        <li key={index}>
                            <a href={item.href}>{item.value}</a>
                        </li>)}
                     </ul>
                </div>
            </div>
        </div>

    )
}
export default Menu;
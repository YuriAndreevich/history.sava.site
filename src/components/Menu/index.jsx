import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'

const Menu = ({ header, items, active, setActive }) => {
    return (
        <div className={active ? 'menu__active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur">
                <div className="menu__content">
                    <div className="menu__header">
                        {header}
                    </div>
                    <ul>
                    <Link to='/'><a>Главная</a></Link>
                    <Link to='/search'><a>Поиск по датам</a></Link>
                    <hr style={{width:'100hv'}}/>
                         {items.map((item, index) =>
                        <li key={index}>
                            <Link to={item.href}>{item.naz}</Link>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Menu;
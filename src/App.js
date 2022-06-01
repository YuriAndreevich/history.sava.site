import { Routes, Route, Link } from 'react-router-dom';

import themesData from './Themes/themesData'

import './App.css';
import Menu from './components/Menu';
import { useState } from 'react';


function App() {
    const [menuActive, setMenuActive] = useState(false)
    
    return (
        <div className='app'>
            <nav><div className='burger-btn' onClick={()=>setMenuActive(!menuActive)}>
            <Menu header={'Экзаменационные билеты по истории беларуси'} active={menuActive} setActive={setMenuActive} items={themesData}/>
                <span />
            </div>
            </nav>
            <Routes>
                {themesData.map(link => <Route path={link.href} element={link.el} />)}
            </Routes>

        </div >
    );
}

export default App;

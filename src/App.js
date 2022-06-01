import { Routes, Route } from 'react-router-dom';

import themesData from './Themes/themesData'
import './App.css';
import Main from './components/Main';
import Menu from './components/Menu'
import { useState } from 'react';


function App() {
    const [menuActive, setMenuActive] = useState(false)
    
    return (
        <div className='app'>
            <nav><div className='burger-btn' onClick={()=>setMenuActive(!menuActive)}>
            <Menu active={menuActive} setActive={setMenuActive} items={themesData}/>
                <span/>
            </div>
            </nav>
          <Routes> 
                <Route path='/' element={<Main/>}/>
                {themesData.map(link => <Route path={link.href} element={link.el} />)}
            </Routes>
        </div >
    );
}

export default App;

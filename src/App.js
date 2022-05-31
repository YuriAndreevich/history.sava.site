import { Routes, Route, Link } from 'react-router-dom';

import B1 from './Themes/b1'
import B2 from './Themes/b2'
import B3 from './Themes/b3'
import B4 from './Themes/b4'
import B5 from './Themes/b5'
import B6 from './Themes/b6'
// import B7 from './Themes/b7'
// import B8 from './Themes/b8'
// import B9 from './Themes/b9'
// import B10 from './Themes/b10'
// import B11 from './Themes/b11'
// import B12 from './Themes/b12'
// import B13 from './Themes/b13'
// import B14 from './Themes/b14'
// import B15 from './Themes/b15'
// import B16 from './Themes/b16'
// import B17 from './Themes/b17'
// import B18 from './Themes/b18'
// import B19 from './Themes/b19'
// import B20 from './Themes/b20'
// import B21 from './Themes/b21'
// import B22 from './Themes/b22'
// import B23 from './Themes/b23'
// import B24 from './Themes/b24'
// import B25 from './Themes/b25'

import './App.css';
import Menu from './components/Menu';
import { useState } from 'react';


function App() {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{ value: 'Главная', href: '/' },
    { value: 'Билет 1', href: '/b1'},
    { value: 'Билет 2', href: '/b2' },
    { value: 'Билет 3', href: '/b3' },
    { value: 'Билет 4', href: '/b4' },
    { value: 'Билет 5', href: '/b5' },
    { value: 'Билет 5', href: '/b5' },
    { value: 'Билет 5', href: '/b5' },
    { value: 'Билет 5', href: '/b5' },
    { value: 'Билет 5', href: '/b5' },
    { value: 'Билет 5', href: '/b5' },
    { value: 'Билет 5', href: '/b5' },
    { value: 'Билет 5', href: '/b5' },
    { value: 'Билет 6', href: '/b6' }]
    return (
        <div className='app'>
            <nav><div className='burger-btn' onClick={()=>setMenuActive(!menuActive)}>
            <Menu header={'Экзаменационные билеты по истории беларуси'} active={menuActive} setActive={setMenuActive} items={items}/>
                <span />
            </div>
            </nav>
            <header>
                <Link to='/b1'>b1</Link>
                <Link to='/b2'>b2</Link>
                <Link to='/b3'>b3</Link>
                <Link to='/b4'>b4</Link>
                <Link to='/b5'>b5</Link>
                <Link to='/b6'>b6</Link>
                {/* <Link to='/b7'>b7</Link>
                <Link to='/b8'>b8</Link>
                <Link to='/b9'>b9</Link>
                <Link to='/b10'>b10</Link>
                <Link to='/b11'>b11</Link>
                <Link to='/b12'>b12</Link>
                <Link to='/b13'>b13</Link>
                <Link to='/b14'>b14</Link>
                <Link to='/b15'>b15</Link>
                <Link to='/b16'>b16</Link>
                <Link to='/b17'>b17</Link>
                <Link to='/b18'>b18</Link>
                <Link to='/b19'>b19</Link>
                <Link to='/b20'>b20</Link>
                <Link to='/b21'>b21</Link>
                <Link to='/b22'>b22</Link>
                <Link to='/b23'>b23</Link>
                <Link to='/b24'>b24</Link>
                <Link to='/b25'>b25</Link> */}

            </header>
            <Routes>
                <Route path='/b1' element={<B1 />} />
                <Route path='/b2' element={<B2 />} />
                <Route path='/b3' element={<B3 />} />
                <Route path='/b4' element={<B4 />} />
                <Route path='/b5' element={<B5 />} />
                <Route path='/b6' element={<B6 />} />
                {/* <Route path='/b7' element={<B7 />} />
                <Route path='/b8' element={<B8 />} />
                <Route path='/b9' element={<B9 />} />
                <Route path='/b10' element={<B10 />} />
                <Route path='/b11' element={<B11 />} />
                <Route path='/b12' element={<B12 />} />
                <Route path='/b13' element={<B13 />} />
                <Route path='/b14' element={<B14 />} />
                <Route path='/b15' element={<B15 />} />
                <Route path='/b16' element={<B16 />} />
                <Route path='/b17' element={<B17 />} />
                <Route path='/b18' element={<B18 />} />
                <Route path='/b19' element={<B19 />} />
                <Route path='/b20' element={<B20 />} />
                <Route path='/b21' element={<B21 />} />
                <Route path='/b22' element={<B22 />} />
                <Route path='/b23' element={<B23 />} />
                <Route path='/b24' element={<B24 />} />
                <Route path='/b25' element={<B25 />} /> */}
            </Routes>

        </div >
    );
}

export default App;

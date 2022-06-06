import React from "react";
import p from '../../img/1.pdf'
import './main.scss'

const Main = () => {
    return(
<div className='main__cover'>
<p className='main__text' style={{padding:'100px'}}>Экзаменационные билеты по Истории Беларуси</p>

<div className='main__search'>
    <details className={'main__details'} ><summary><p style={{textAlign:'center'}}>Онлайн учебник</p></summary><iframe title="Онлайн учебник" src={p} width="700" height="800" /></details>
</div>
</div>

    )
}
export default Main
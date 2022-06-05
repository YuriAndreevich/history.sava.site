import React from "react";
import p from '../../img/1.pdf'
import s from './main.module.scss'

const Main = () => {
    return(
<div className={s.main__cover}>
<p className={s.main__text} style={{padding:'100px'}}>Экзаменационные билеты по Истории Беларуси</p>

<div className={s.main__search}>
    <details className={`${s.main__details} ${s.main_hidden}`} ><summary><p style={{textAlign:'center'}}>Онлайн учебник</p></summary><embed src={p} width="700" height="800" /></details>
</div>
</div>

    )
}
export default Main
import React from "react";
import p from '../../img/1.pdf'
import s from './main.module.css'

const Main = () => {
    return(
<div className={s.main__cover}>
<br></br><br></br><br></br><p style={{color:'white'}}>Экзаменационные билеты по Истории Беларуси</p>

<details style={s.details}><summary>Онлайн учебник</summary><embed src={p} width="700" height="800" /></details>

</div>

    )
}
export default Main
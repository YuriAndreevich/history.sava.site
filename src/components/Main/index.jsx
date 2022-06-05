import React from "react";
import p from '../../img/1.pdf'
import s from './main.module.scss'

const Main = () => {
    return(
<div className={s.main__cover}>
<br></br><br></br><br></br><p className={s.main__text}>Экзаменационные билеты по Истории Беларуси</p>

<div className={s.main__search}><details className={s.main__details}><summary>Поиск по датам</summary></details>
    <details className={s.main__details} ><summary>Онлайн учебник</summary><embed src={p} width="700" height="800" /></details>
</div>
</div>

    )
}
export default Main
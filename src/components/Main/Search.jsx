import React, { useState } from "react";
import './main.scss'

function Search() {

    const historyData = [
        { age: '862 год — первое упоминание в хронике города Полоцк как центра племени кривичей.' },
        { age: '1067 год - битва на Немиге, внесенная в "Повесть временных лет", где впервые упоминается Минск.' },
        { age: '1230 год — основание Великого княжества Литовского.' },
        { age: '1569 год — Польское Королевство и Великое княжество Литовское объединяются в федеральное государство Речь Посполитую.' },
        { age: '1772, 1793, 1795 года — включение Речи Посполитой и территории Беларуси в Российскую Империю.' },
        { age: '1863 год - январь 1864 года — восстание в Беларуси, Польше и Литве.' },
        { age: '7 ноября 1917 года — Октябрьская Революция в России.' },
        { age: '25 марта 1918 года — провозглашение Белорусской Народной Республики.' },
        { age: '1 января 1919 года - образование Белорусской Советской Социалистической Республики.' },
        { age: '18 марта 1921 года — подписание Рижского договора, согласно которому Западная Беларусь пребывает в составе Польши до 1939 года.' },
        { age: '22 июня 1941 года - 28 июля 1944 года — оккупация Беларуси фашистской Германией.' },
        { age: '27 июля 1990 года — Верховный Совет Республики Беларусь принимает Декларацию о государственном суверенитете Республики Беларусь.' },
        { age: '15 марта 1994 года — Верховный Совет Республики Беларусь принимает Конституцию Республики Беларусь.' }
    ]


    const [value, setValue] = useState('')

    const filteredHistory = historyData.filter((data) =>
        data.age.toLowerCase().includes(value.toLowerCase())
    )

    return (
        <div className='search'>
            <input placeholder="Введите дату" className="search__input" onChange={(event) => setValue(event.target.value)} />
            {value.length ? <ul className="search__text">{filteredHistory.map((data, index) =>
                <li key={index}>
                    {data.age}
                </li>)}
            </ul> : <div></div>}
        </div>
    )
}
export default Search;
import React, { useState } from "react";

function Search() {

    const historyData = [
        { age: '1925  30 июня', body: "xtn", },
        { age: '1000 30 мая', body: "лdasd", },
        { age: '945', body: "gdffd", }
    ]


    const [value, setValue] = useState('')

    const filteredHistory = historyData.filter((data) =>
        data.age.toLowerCase().includes(value.toLowerCase())
    )
    
    return (
        <div style={{ margin: '100px', color: 'white' }}>
            <input onChange={(event)=>setValue(event.target.value)}/>
            <ul>{filteredHistory.map((data, index) =>
                        <li key={index}>
                            {data.age + ' ' +data.body}
                        </li>)}
                    </ul>
        </div>
    )
}
export default Search;

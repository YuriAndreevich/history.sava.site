import React, { useState } from "react";

function Search() {

    const historyData = [
        { age: '1925', body: "xtn", },
        { age: '1000', body: "лdasd", },
        { age: '945', body: "gdffd", }
    ]
    console.log(historyData[1])

    const [value, setValue] = useState('')

    const filteredHistory = historyData.filter(data =>
        data.name.toLowerCase().includes(value.toLowerCase())
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

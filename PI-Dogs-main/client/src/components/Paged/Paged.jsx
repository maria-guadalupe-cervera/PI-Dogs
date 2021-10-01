import React from "react";

export default function Paged({dogsPaged,allDogs,pagedTotal}){
    const numPages=[]
    const pages=Math.ceil(allDogs/dogsPaged);

    for(let i=1;i<=pages; i++){
        numPages.push(i)
    }

    return(
        <nav>
            <ul>
                {numPages?.map(num=>(
                    <li key={num}>
                        <a onClick={()=>
                        pagedTotal(num)}>{num}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
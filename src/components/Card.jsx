import Title from "./Title"
import Count from "./Count"
import Reset from "./Reset"
import CountButton from "./CountButton"
import { useState } from "react"

export default function Card(){
    const [count,setCount] = useState(0);
    return(
        <>
        <div className="card">
         <Title/> 
         <Count count={count} setCount={setCount}/>
          <Reset setCount={setCount}/>
          <CountButton count={count} setCount={setCount}/>
        </div>
         
        </>
    )
}
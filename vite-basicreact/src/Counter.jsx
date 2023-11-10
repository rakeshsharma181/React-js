import { useState } from "react"

function Counter() {

    let[count,setCount] = useState(0)

    const add = ()=>{

         setCount(count + 1);
    }
    const remove = ()=>{

        setCount(count - 1);
   }


    return (
        <>
        <h1>Couter In React JS</h1>
        <p>Counter <span>{count}</span></p>
        <button onClick={add}>Add</button>
        <br />
        <button onClick={remove}>Remove</button>

        </>
    )
}

export default Counter
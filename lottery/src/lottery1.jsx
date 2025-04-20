import { useState } from "react"
import { generate1,sum } from "./lotery";

export default function Lotery(){
    let [lot,setLot] = useState(generate1(3));

    let update=()=>{
        setLot(generate1(3));
    }
    let win = sum(lot) === 15;

    return(
        <>
        <h3>Lottery Game</h3>
        <div className="ticket">
            <span>{lot[0]}</span>
            <span>{lot[1]}</span>
            <span>{lot[2]}</span>
        </div>
        <button onClick={update}>click me?</button>
        <h2>{win && "you won"}</h2>
        </>
    )
}
import { useState } from "react"
import { generate,sum } from "./lotter";

export default function Lottery() {
let [lot , setLot] = useState(generate(3));


 let update=()=>{
    setLot(generate(3));
 }

 let win = sum(lot) === 15;
    return(
        <>
        <h3>Lottery</h3>
        <div className="tick1">
            <span>{lot[0]}</span>
            <span>{lot[1]}</span>
            <span>{lot[2]}</span>
        </div>
        <button onClick={update}>click</button>
        <h2>{win && "You win"}</h2>
        </>
    )
}
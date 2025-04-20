import { useState } from "react"
import { generate,sum } from "./lotery1";
import Ticket1 from './Ticket'

export default function Lotery({n = 3, winsum=15 }){
    let [lot,setLot] = useState(generate(n));

    let update=()=>{
        setLot(generate(n));
    }
    let win = sum(lot) === winsum;

    return(
        <>
        <h3>Lottery Game</h3>
        <Ticket1 ticket2={lot}/>
        <br />
        <button onClick={update}>click me? </button>
        <h2>{win && "you won"}</h2>
        </>
    )
}
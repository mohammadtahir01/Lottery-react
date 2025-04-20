import { useState } from "react"
import { generat ,sum1 } from "./ticket12.js"
import Ticket15 from "./ticket15";

export default function Ticket12({ n=3, wining=15 }){
    let [ticket21,setTicket] = useState(generat(n));

    let update12 =()=>{
        setTicket(generat(n));
    }
    let win = sum1(ticket21) === wining;

    return(
        <>
        <h3>Ticket game</h3>
        <Ticket15 tick={ticket21}/>
        <br />
        {/* <div>
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div> */}
        <button onClick={update12}>Click ?</button>
        <h2>{win && "You win"}</h2>
        </>
    )
}
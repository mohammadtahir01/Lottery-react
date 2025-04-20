//this is second file of react js

import TicketNum from "./ticketNum"  // this is first importion

export default function Ticket1({ticket2}){
return(
    <>
    {
        ticket2.map((num,idx)=>(
            <TicketNum num={num} key={idx}/>
        ))
    }
    {/* // this is the basic way to write */}
     {/* <TicketNum num={ticket2[0]}/>
     <TicketNum num={ticket2[1]}/>
     <TicketNum num={ticket2[2]}/> */}
    </>
)
}
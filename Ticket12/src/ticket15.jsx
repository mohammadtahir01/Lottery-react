//this second file of this program
import Ticket14 from "./ticket14"

export default function Ticket15({ tick }){
    return(
        <>
        {
            tick.map((num1,idx1)=>(
                <Ticket14 num1={num1} key={idx1}/>
            ))
        }
         {/* <Ticket14 num1={[0]}/>
         <Ticket14 num1={[1]}/>
         <Ticket14 num1={[2]}/> */}
        </>
    )
}
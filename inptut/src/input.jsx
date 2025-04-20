import { useState } from "react"


export default function Input1(){
    let [inp,setInp] = useState("");

    let update=(event)=>{
      setInp(event.target.value);
    }

    return(
        <>
        <input type="text" placeholder="Search something" value={inp} onChange={update} />
        </>
    )
}
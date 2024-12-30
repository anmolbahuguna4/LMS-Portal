import { useState } from "react"
import Module from "./Module";
import Batch from "./Batch";
import TestModule from "./TestModule";
import Resources from "./Resources";

function SidePanel() {

    // const Button_modify = " border border-4 border-blue-950 p-2 m-1 rounded-md text-white bg-blue-950 font-bold flex items-start "

    const Button_Details = " flex items-start font-bold p-2 m-1 border-4 border-transparent "
    const Button_Hover = " hover:border hover:border-4 hover:border-blue-950 hover:p-2 hover:m-1 hover:rounded-md hover:text-white hover:bg-blue-950 hover:font-bold "
    const Active_state = " border border-4 border-blue-950 p-2 m-1 rounded-md text-white bg-blue-950 font-bold "
    const [active, setActive] = useState(0);

  return (
    <>
      <div className=" flex mt-4 w-full ">
        <div className=" h-screen w-[20%] border border-4-black
         ">
            <div className=" mt-2 flex flex-col ps-3 ">
                <button className= {`${Button_Details} ${Button_Hover} ${active === 1 ? Active_state : ""} `}
                onClick={ ()=> setActive(1)}>Module</button>
                <button className= {`${Button_Details} ${Button_Hover} ${active === 2 ? Active_state : ""} `}
                onClick={ ()=> setActive(2)}>Batch</button>
                <button className= {`${Button_Details} ${Button_Hover} ${active === 3 ? Active_state : ""} `}
                onClick={ ()=> setActive(3)}>Test Module</button>
                <button className= {`${Button_Details} ${Button_Hover} ${active === 4 ? Active_state : ""} `}
                onClick={ ()=> setActive(4)}>Resources</button>
            </div>
        </div>
        <div className=" w-[100%] mx-2 ">{active === 1 && <Module/>}</div>
        {active === 2 && <Batch/>}
        {active === 3 && <TestModule/>}
        {active === 4 && <Resources/>}
      </div>
    </>
  )
}

export default SidePanel
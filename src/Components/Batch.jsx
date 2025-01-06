import { useState } from "react"
import BatchCards from "./BatchCards"


function Batch() {

   const Button_details = " border border-blue-950 text-blue-950 font-semibold m-5 px-7 py-2 rounded-[0.3rem] "
   const Button_Active = " border border-blue-950 text-white font-semibold bg-blue-950 m-5 px-7 py-2 rounded-[0.3rem] "
   const Button_Hover = " hover:border hover:border-blue-950 hover:text-white hover:font-semibold hover:bg-blue-950 hover:m-5 hover:px-7 hover:py-2 hover:rounded-[0.3rem] "

   const [choose, setChoose] = useState(1);

  return (
    <>
      <div className=" h-full bg-gray-200 ">
        <div>
          <div className="py-2">
          <div className=" border rounded-full mt-2 w-[18rem] bg-white ml-6 font-semibold ">
          <input className=" px-2 py-2 outline-none border-none rounded-full "
                 type="text"
                 placeholder="Search here...">
                 </input>
                 <i className="fa-solid fa-magnifying-glass pl-12"></i>
          </div>
          </div>
        </div>
        <div>
          <button className= {`${Button_details} ${Button_Hover} ${choose === 1 ? Button_Active : "" } `}
          onClick={ ()=> setChoose(1)}>
          Current
          </button>
          <button className= {`${Button_details} ${Button_Hover} ${choose === 2 ? Button_Active : "" } `}
          onClick={ ()=> setChoose(2)}>
            Upcoming
          </button>
          <button className= {`${Button_details} ${Button_Hover} ${choose === 3 ? Button_Active : "" } `}
          onClick={ ()=> setChoose(3)}>
            Completed
          </button>
        </div>
        {choose === 1 && <BatchCards/>}
        {choose === 2 && "Empty"}
        {choose === 3 && "Empty"}
      </div>
    </>
  )
}

export default Batch
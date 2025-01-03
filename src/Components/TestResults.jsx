
import { useState } from "react";

function TestResults() {

 const batches = ["4:30pm/FS/Nitin/13-Mar", "10am/Nitin/FS/4-Mar", "12pm/MERN/Saurabh/5-June", "12pm- Full Stack", "4:30pm/FS/13-May", "10am/FS/Nitin/9-Sep", "4:30pm/FS/14-Oct"]
 const [selectedBatch, setSelectedBatch] = useState("");
 const resultChange = (event) => {
    setSelectedBatch(event.target.value)
  }

  return (
    <>
        <div className=" bg-gray-200 w-full h-full ">
            <div className=" w-[30rem] m-4 ">
                <div className=" flex justify-between items-center ">
                    <label className=" font-semibold text-xl "
                    htmlFor="dynamic-options"
                    >Select Batch</label>
                    <select className=" border border-2 border-gray-400 rounded px-2 py-2 w-[22rem] "
                    id="dynamic-options" value={selectedBatch} 
                    onChange={resultChange}>
                    <option value="">Select Batch</option>
                    {batches.map((Option, index) => (
                        <option key={index} value={Option.toLowerCase()}>
                        {Option}
                        </option>
                    ))}
                    </select>
                </div>
            </div>
        </div>
    </>
  )
}

export default TestResults
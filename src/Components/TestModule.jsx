import { useState } from "react"
import TestCards from "./TestCards"
import CreateTest from "./CreateTest"
import TestResults from "./TestResults"


function TestModule() {

  const test_Buttons = " border border-blue-950 text-blue-950 font-semibold m-5 px-7 py-2 rounded-[0.3rem] "
  const test_hover = " hover:border hover:border-blue-950 hover:text-white hover:font-semibold hover:bg-blue-950 hover:m-5 hover:px-7 hover:py-2 hover:rounded-[0.3rem] "
  const test_Active = " border border-blue-950 text-white font-semibold bg-blue-950 m-5 px-7 py-2 rounded-[0.3rem] "
  const [get, setGet] = useState(1)

  return (
    <>
      <div className=" bg-white w-[75rem] h-full m-3 ">
        <div>
          <button className= {`${test_Buttons} ${test_hover} ${get === 1 ? test_Active: ""}`}
          onClick={()=>setGet(1)}>All Test</button>
          <button className= {`${test_Buttons} ${test_hover}${get === 2 ? test_Active: ""}`}
          onClick={()=>setGet(2)}>Create Test</button>
          <button className= {`${test_Buttons} ${test_hover}${get === 3 ? test_Active: ""}`}
          onClick={()=>setGet(3)}>Test Results</button>
        </div>
        <div>
          {get === 1 && <TestCards/>}
          {get === 2 && <CreateTest/>}
          {get === 3 && <TestResults/>}
        </div>
      </div>
    </>
  )
}

export default TestModule
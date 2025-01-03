
import { useState } from "react";

function CreateTest() {

  const [selectedValue, setSelectedValue] = useState("");

  const options = ["CCNA Networking", "MERN STACK", "Data Analytics Masters", "Cyber Security", "Machine Learning", "Python Programming", "Machine Learning Using Python", "CCNA And Cyber Security Combination", "Digital Marketing", "Data Analysis Using Python", "German Language", "Fronend Development", "Data Science"];

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }
  console.log(handleChange)
  return (
    <>
      <div className=" bg-white w-full h-full ">
        <div className=" w-[30rem] m-4 flex gap-3 flex-col ">


          <div className=" flex justify-between items-center ">
            <div className=" font-semibold ">Test Name</div>
            <div>
              <input className=" border border-2 border-gray-400 rounded px-2 py-2 w-[18rem] "
              placeholder="Test Name"></input>
            </div>
          </div>


          <div className=" flex justify-between items-center ">
            <div className=" font-semibold ">Test Duration (minutes) </div>
            <div className=" ">
              <input className=" border border-2 border-gray-400 rounded px-2 py-2 w-[18rem] "
              placeholder="Test Duration (minutes)"></input>
            </div>
          </div>


          <div className=" flex justify-between items-center ">
            <label className=" font-semibold "
            htmlFor="dynamic-options"
            >Select Course</label>
              <select className=" border border-2 border-gray-400 rounded px-2 py-2 w-[18rem] "
              id="dynamic-options" value={selectedValue} 
              onChange={handleChange}>
              <option value="">Select Course</option>
              {options.map((Option, index) => (
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

export default CreateTest
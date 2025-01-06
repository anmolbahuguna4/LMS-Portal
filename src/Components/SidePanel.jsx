import { useState } from "react";
import Module from "./Module";
import Batch from "./Batch";
import TestModule from "./TestModule";
import Resources from "./Resources";
import { Link, Route, Routes } from "react-router-dom";

function SidePanel() {
  // const Button_modify = " border border-4 border-blue-950 p-2 m-1 rounded-md text-white bg-blue-950 font-bold flex items-start "

  const Button_Details =
    " flex items-start font-bold p-2 m-1 border-4 border-transparent ";
  const Button_Hover =
    " hover:border hover:border-4 hover:border-blue-950 hover:p-2 hover:m-1 hover:rounded-md hover:text-white hover:bg-blue-950 hover:font-bold ";
  const Active_state =
    " border border-4 border-blue-950 p-2 m-1 rounded-md text-white bg-blue-950 font-bold ";
  const [active, setActive] = useState(1);

  return (
    <>
      <div className=" h-[100rem] flex w-full ">
        <div className=" mt-[5rem] w-[17%] h-[100rem] bg-white fixed ">
          <div className=" ">
            <div className=" mt-2 flex flex-col ps-3 ">
              <Link to="Module">
                <div
                  className={`${Button_Details} ${Button_Hover} ${
                    active === 1 ? Active_state : ""
                  }`}
                  onClick={() => setActive(1)}
                >
                  Module
                </div>
              </Link>
              <Link to="Batch">
                <div
                  className={`${Button_Details} ${Button_Hover} ${
                    active === 2 ? Active_state : ""
                  } `}
                  onClick={() => setActive(2)}
                >
                  Batch
                </div>
              </Link>
              <Link to="Test_Module">
                <div
                  className={`${Button_Details} ${Button_Hover} ${
                    active === 3 ? Active_state : ""
                  } `}
                  onClick={() => setActive(3)}
                >
                  Test Module
                </div>
              </Link>
              <Link to="Resources">
                <div
                  className={`${Button_Details} ${Button_Hover} ${
                    active === 4 ? Active_state : ""
                  } `}
                  onClick={() => setActive(4)}
                >
                  Resources
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-full h-[100rem] mt-[5rem] ml-[17rem] ">
        <Routes> 
        <Route path="Module" element={<Module/>}></Route>
        <Route path="Batch" element={<Batch/>}></Route>
        <Route path="Test_Module" element={<TestModule/>}></Route>
        <Route path="Resources" element={<Resources/>}></Route>
        </Routes>
        </div>
      </div>
    </>
  );
}

export default SidePanel;

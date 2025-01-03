
function TestCards() {
  return (
    <>
        <div className=" w-full h-full ">
            <div className=" flex flex-wrap justify-center items-center ">
                <div className=" bg-white border border-2 border-gray-300 rounded-lg shadow-xl w-[32rem] h-[40rem] m-2 p-2">
                    <div className=" text-3xl font-extrabold text-gray-400 flex justify-center m-4 ">
                    Frontend Development
                    </div>
                        <div>
                            <div className=" flex items-center justify-between border-b-2 pb-6  ">
                                <div className=" text-xl text-blue-950 font-bold ">HTML, CSS</div>
                                <div><i className="fa-solid fa-angle-down text-2xl"></i></div>
                            </div>
                            <div className=" flex items-center justify-between border-b-2 pb-6  ">
                                <div className=" text-xl text-blue-950 font-bold ">Javascript, React.Js</div>
                                <div><i className="fa-solid fa-angle-down text-2xl"></i></div>
                            </div>
                        </div>
                </div>
                <div className=" bg-white border border-2 border-gray-300 rounded-lg shadow-xl w-[32rem] h-[40rem] m-2 p-2 ">
                    <div className=" text-3xl font-extrabold text-gray-400 flex justify-center m-4 ">
                    MERN STACK
                    </div>
                        <div>
                            <div className=" flex items-center justify-between border-b-2 pb-6  ">
                                <div className=" text-xl text-blue-950 font-bold ">Javascript</div>
                                <div><i className="fa-solid fa-angle-down text-2xl"></i></div>
                            </div>
                            <div className=" flex items-center justify-between border-b-2 pb-6  ">
                                <div className=" text-xl text-blue-950 font-bold ">React.Js</div>
                                <div><i className="fa-solid fa-angle-down text-2xl"></i></div>
                            </div>
                        </div>  
                </div>
            </div>
        </div>
    </>
  )
}

export default TestCards
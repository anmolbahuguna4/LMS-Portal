import CourseCard from "./CourseCard"

function Module() {
  return (
    <>  
        <div className=" bg-gray-200 ">
            <div className="relative p-3 ">
                <div className="absolute inset-y-0 left-0 ps-6 
                            flex items-center justify-start 
                            pointer-events-none ">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                    <input type="text"
                        className=" px-[3rem] py-[0.4rem] border border-gray-400 rounded-[3rem] " 
                        placeholder="Search Module Here..."></input>
                </div>    
            </div>
            <div><CourseCard/></div>
        </div>
    </>
  )
}

export default Module
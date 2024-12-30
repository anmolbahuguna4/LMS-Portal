
function Header() {
  return (
    <>
        <header className=" w-full flex items-center border border-b-2 border-gray-600 font-[Readex Pro] ">
            <div className=" w-[25%]">
                <img src="https://www.lms.brillicaservices.com/images/logo.jpg" className=" w-[40%] h-[90%] mx-12 "></img>
            </div>
            <div className=" w-[75%] flex gap-4 items-center justify-end mx-24 ">
                <i className="fa-regular fa-bell text-xl text-blue-950 "></i>
                <h1 className=" text-blue-950 font-bold ">Hi, Anmol</h1>   
            </div>
        </header>
    </>
  )
}

export default Header

function Resources() {

  const resource_Button = " border border-blue-950 text-blue-950 font-semibold m-5 px-7 py-2 rounded-[0.3rem] "
  const resource_hover = " hover:border hover:border-blue-950 hover:text-white hover:font-semibold hover:bg-blue-950 hover:m-5 hover:px-7 hover:py-2 hover:rounded-[0.3rem] "

  return (
    <>
      <div className=" bg-white w-full h-screen ">
        <div className=" flex justify-between items-center px-3 ">
          <div className=" font-extrabold text-2xl text-gray-500 ">ALL RESOURCES</div>
          <button className= {`${resource_Button} ${resource_hover}`}>Add Resources</button>
        </div>
        <div className=" flex justify-center items-center gap-2 ">
          <div className=" font-semibold text-xl text-gray-500 ">No Resources Available</div>
          <div><i className="fa-solid fa-clipboard text-gray-500 text-2xl"></i></div>
        </div>
      </div>
    </>
  )
}

export default Resources
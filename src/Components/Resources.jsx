
function Resources() {

  const resource_Button = " border border-violet-800 text-violet-800 font-semibold m-5 px-7 py-2 rounded-[0.3rem] "
  const resource_hover = " hover:border hover:border-violet-800 hover:text-white hover:font-semibold hover:bg-violet-800 hover:m-5 hover:px-7 hover:py-2 hover:rounded-[0.3rem] "

  return (
    <>
      <div className=" bg-gray-200 w-[75rem] h-full m-3 mt-0 relative ">
        <div className=" flex justify-between items-center m-5 ">
          <div className=" font-extrabold text-2xl text-gray-500 ">ALL RESOURCES</div>
          <button className= {`${resource_Button} ${resource_hover}`}>Add Resources</button>
        </div>
        <div className=" flex flex-col items-center gap-2 absolute top-60 left-[30rem] ">
          <div className=" font-semibold text-xl text-gray-500 ">No Resources Available</div>
          <div><i className="fa-solid fa-clipboard text-gray-500 text-2xl"></i></div>
        </div>
      </div>
    </>
  )
}

export default Resources
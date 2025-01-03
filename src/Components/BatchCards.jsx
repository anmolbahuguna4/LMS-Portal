
function BatchCards() {

    const batch_cards = " bg-white m-5 p-6 border border-t-8 border-t-blue-950 rounded-3xl shadow-lg w-[25rem] h-[19rem] "

  return (
    <>
        <div className=" bg-slate-200 w-full flex flex-wrap ">
            <div className= {batch_cards}>
                <div className=" flex justify-between items-center ">
                    <div className=" text-blue-950 text-xl font-semibold ">4:30pm/FS/13-May</div>
                    <div><i className="fa-regular fa-user"></i> 16</div>
                </div>
                <div className=" flex flex-col gap-4 mt-4 font-semibold ">
                    <p><i className="fa-solid fa-graduation-cap px-2"></i>MERN STACK</p>
                    <p><i className="fa-solid fa-user px-2"></i>nitin bela</p>
                    <p><i className="fa-regular fa-calendar-days px-2"></i>2024-05-13 To 2024-11-16</p>
                    <p><i className="fa-solid fa-clipboard px-2"></i>4:30pm-6:30pm</p>
                </div>
                <div className=" border border-b-2 border-dashed border-gray-200 mt-4 "></div>
                <button className=" border border-blue-950 bg-blue-950 text-white font-semibold rounded-md my-3 px-2 py-1 ">View Details</button>
            </div>
            <div className= {batch_cards}>
            <div className=" flex justify-between items-center ">
                    <div className=" text-blue-950 text-xl font-semibold ">10am/FS/nitin/9-sep</div>
                    <div><i className="fa-regular fa-user"></i> 8</div>
                </div>
                <div className=" flex flex-col gap-4 mt-4 font-semibold ">
                    <p><i className="fa-solid fa-graduation-cap px-2"></i>MERN STACK</p>
                    <p><i className="fa-solid fa-user px-2"></i>nitin bela</p>
                    <p><i className="fa-regular fa-calendar-days px-2"></i>2024-09-09 To 2025-01-10</p>
                    <p><i className="fa-solid fa-clipboard px-2"></i>10.00am-12.00pm</p>
                </div>
                <div className=" border border-b-2 border-dashed border-gray-300 mt-4 "></div>
                <button className=" border border-blue-950 bg-blue-950 text-white font-semibold rounded-md my-3 px-2 py-1 ">View Details</button>
            </div>
            <div className= {batch_cards}>
            <div className=" flex justify-between items-center ">
                    <div className=" text-blue-950 text-xl font-semibold ">4:30pm/FS/14-Oct</div>
                    <div><i className="fa-regular fa-user"></i> 7</div>
                </div>
                <div className=" flex flex-col gap-4 mt-4 font-semibold ">
                    <p><i className="fa-solid fa-graduation-cap px-2"></i>MERN STACK</p>
                    <p><i className="fa-solid fa-user px-2"></i>nitin bela</p>
                    <p><i className="fa-regular fa-calendar-days px-2"></i>2024-10-14 To 2025-04-16</p>
                    <p><i className="fa-solid fa-clipboard px-2"></i>4:30pm-6:30pm</p>
                </div>
                <div className=" border border-b-2 border-dashed border-gray-300 mt-4 "></div>
                <button className=" border border-blue-950 bg-blue-950 text-white font-semibold rounded-md my-3 px-2 py-1 ">View Details</button>
            </div>
            <div className= {batch_cards}>
            <div className=" flex justify-between items-center ">
                    <div className=" text-blue-950 text-xl font-semibold ">3pm/DM/18-Nov</div>
                    <div><i className="fa-regular fa-user"></i> 16</div>
                </div>
                <div className=" flex flex-col gap-4 mt-4 font-semibold ">
                    <p><i className="fa-solid fa-graduation-cap px-2"></i>DIGITAL MARKETING</p>
                    <p><i className="fa-solid fa-user px-2"></i>nitin bela</p>
                    <p><i className="fa-regular fa-calendar-days px-2"></i>2024-11-18 To 2025-05-20</p>
                    <p><i className="fa-solid fa-clipboard px-2"></i>4:30pm-6:30pm</p>
                </div>
                <div className=" border border-b-2 border-dashed border-gray-300 mt-4 "></div>
                <button className=" border border-blue-950 bg-blue-950 text-white font-semibold rounded-md my-3 px-2 py-1 ">View Details</button>
            </div>
        </div>
    </>
  )
}

export default BatchCards
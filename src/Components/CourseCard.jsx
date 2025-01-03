import CourseCards from "./CourseCards.json";

function CourseCard() {
    console.log(CourseCards);
    const Boxes = " mx-2 my-2 p-2 border border-gray-300 border-b-4 border-b-green-700 rounded-lg shadow-lg text-base text-slate-900 mb-2 font-semibold flex flex-col " // Log CourseCards to inspect the structure

    return (
        <>
                <div className=" flex flex-wrap justify-start ">
                    {CourseCards.courses.map((item, index) => {
                        return (
                            <div key={index} className=" w-[22.5rem] mx-5 my-5 p-5 bg-gray-100 border border-gray-300 border-b-8 border-b-blue-950 rounded-lg shadow-lg ">
                                <h2 className="text-xl font-bold mb-4 text-blue-950 ">
                                    {item.title}
                                </h2>
                                <div className=" flex text-center ">
                                    <div className= {Boxes} >
                                        <div className=" text-gray-600 text-center ">Duration</div> 
                                        <div>{item.duration}</div>
                                    </div>
                                    <div className= {Boxes} >
                                        <div className=" text-gray-600 text-center justify-center ">Total Topics</div> 
                                        <div>{item.totalTopics}</div>
                                    </div>
                                    <div className= {Boxes} >
                                        <div className=" text-gray-600 text-center px-4 ">Fees </div> 
                                        <div>{item.fees}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
        </>
    );
}

export default CourseCard;
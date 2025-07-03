import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";

const Card = ({course,likedCourses,setLikedCourses})=>{

    function clickHandler(){
            if(likedCourses.includes(course.id)){
                //it is liked and then pressed on like to unlike 
                setLikedCourses((prev)=>prev.filter((id)=>(course.id!==id)));
                toast.warning("like removed");
            }
            else{
                //it didnt include , so insert it into liked courses
                if(likedCourses.length===0){
                    setLikedCourses([course.id]);
                }
                else{
                    //non empty
                    setLikedCourses((prev)=>([...prev,course.id]));
                }

                toast.success("Liked successfully");    
            }
    }

    return(
        <div className="w-[300px] bg-[#031849bf] rounded-md overflow-hidden">
            <div className="relative">

                <img src={course.image.url}></img>

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
                grid place-items-center cursor-pointer">
                    <button onClick={clickHandler} className="cursor-pointer">
                        {
                            likedCourses.includes(course.id)  ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                    </button>
                </div>

            </div>
            
            
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                        course.description.length > 100 ? (course.description.substr(0,100)) + "..." : (course.description)
                    }
                    </p>
            </div>
        </div>
    )
}

export default Card;
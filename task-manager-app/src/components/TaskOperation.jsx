import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useState } from "react";
export const TaskOperation = (props)=>{

    return(

        <div className='flex gap-2 borderS m-6 px-2 rounded-md h-9  items-center' style={{backgroundColor: props.boolValue ? "rgb(34 197 94)" : "rgb(254 240 138)"}}>
              <span className='w-full text-purple-700 font-bold'>{props.taskName}</span>
              <button className="hover:scale-125" onClick={() => props.updateTask(props.id)}>
                <IoCheckmarkDoneCircleSharp size={24}/>
              </button>
              <button className="hover:scale-125" onClick={() => props.deleteTask(props.id)}><MdDelete size={24}/></button>
        </div>
    );
};


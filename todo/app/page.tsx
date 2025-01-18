"use client"
import React, { useState } from "react";
import Image from "next/image";

type todo ={
    todo:string|number,
    status : boolean
}


export default function Home() {

const [todos,settodos] = useState<todo[]>()
const [singletodo,setsignletodo] = useState<todo>({todo:'',status:false})


  return (
   <>
   <div className="   p-2     ">  
     <div className="w-[500px] ml-[500px] rounded-md bg-green-300 py-1 px-2 ">
     <form className="my-5 flex justify-between  " >
        <input
          placeholder=" enter the todo"
          name="inp"
          value={singletodo.todo}
          onChange={(e)=>setsignletodo({...singletodo, todo:e.target.value})}
          className="w-[400px] rounded-sm outline-none"
          
        />
        <button
        type="submit"
        className="mx-2 px-1 bg-white rounded-sm"
        
        >
          Add
          </button>
      </form>
      </div>
      <div className="flex flex-col">
        {
          todos?.map((e,i)=>(

            <div className="w-[500px] ml-[500px] rounded-md bg-green-300 py-1 px-2 ">
              <p
              key={e.todo+`${i}`}
              >
              {e.todo}
               </p>
               
               <button
               type="submit"
               className="mx-2 px-1 bg-red-200 rounded-sm"
               
               >
                 delete
                 </button>
             
             </div>
          ))
        }
        </div>


    </div>
   </>
  );
}

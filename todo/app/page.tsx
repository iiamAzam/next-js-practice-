import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className="   p-2 h-screen    ">  
     <div className="bg-red-300 mx-auto  p-1 ">
     <form className="my-5  " >
        <input
          placeholder="enter the todo"

          
        />
        <button>
          Add
          </button>
      </form>
      </div>
    </div>
   </>
  );
}

import React from "react";

function Header({ detailsMenu,setDetailsMenu }) {
  return (
    <div className="flex justify-between outline-none border-none bg-purple-50 rounded-xl shadow p-2 items-center m-3 sm:m-7 text-xl text-gray-500 font-medium">
      <div className="flex-1 flex ">
      
        <button onClick={()=>{setDetailsMenu("today")}}
          className={`relative py-1 px-3 rounded-xl hover:cursor-pointer
            after:block after:h-[2px] after:bg-gray-500
            after:scale-x-0 hover:after:scale-x-100 
            after:origin-center after:transition-transform after:duration-300
            ${detailsMenu === "today" ? "after:scale-x-100 text-purple-700" : ""}`}
        >
          Today
        </button>

   
        <button onClick={()=>{setDetailsMenu("7days")}}
          className={`relative py-1 px-3 rounded-xl hover:cursor-pointer
            after:block after:h-[2px] after:bg-gray-500
            after:scale-x-0 hover:after:scale-x-100 
            after:origin-center after:transition-transform after:duration-300
            ${detailsMenu === "7days" ? "after:scale-x-100 text-purple-700" : ""}`}
        >
          7 days
        </button>
      </div>

      <div className="transition-all  ">
        <button className="bg-purple-700 hover:bg-purple-600 active:bg-purple-700 sm:px-3 py-2 sm:text-md text-sm px-2 rounded-xl hover:cursor-pointer text-white">
          See more details
        </button>
      </div>
    </div>
  );
}

export default Header;

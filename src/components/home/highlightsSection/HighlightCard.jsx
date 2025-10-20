import React from "react";

function HighlightCard({ title, icon, value, unit }) {
  return (
    <div
      className="  group relative flex flex-col items-center justify-center w-full h-35 xl:h-full
                    cursor-pointer rounded-2xl py-5 border border-gray-200/50 bg-white 
                    shadow-md hover:shadow-xl hover:shadow-violet-200/30 transition-all"
    >
      <div
        className="absolute top-3 font-semibold bg-purple-100 text-gray-800 px-3 py-1
                      rounded-md opacity-0 invisible translate-y-3
                      group-hover:opacity-90 group-hover:visible group-hover:translate-y-0
                      transition-all ease-in-out"
      >
        {title}
      </div>

      <div className="flex items-center justify-center mb-3">
        <img
          src={icon}
          alt={title}
          className="w-8 transition-all group-hover:opacity-0 group-hover:invisible"
        />
      </div>

      {/* Value + Unit */}
      <div className="flex flex-col items-center justify-center">
        <span className="font-[Tektur] text-4xl font-semibold">{value}</span>
        <span className="text-xl font-semibold">{unit}</span>
      </div>
    </div>
  );
}

export default HighlightCard;

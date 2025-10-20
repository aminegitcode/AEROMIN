import React from "react";
import sunny from "../../../assets/weather/sunny.png";
function WeatherCard({ title, icon, temp }) {
  return (
    <div
      className=" w-full min-w-15 relative hover:scale-105 transition-all cursor-pointer font-[Tektur] rounded-3xl border border-purple-200/60 bg-white
        h-full  flex flex-col  items-center   py-4  shadow-lg shadow-gray-200/60 "
    >
      <span className=" font-semibold">{title}</span>
      <div className="h-[1px] absolute top-13 bg-gray-200 w-1/2"></div>
      <img
        src={icon}
        alt="weather icon"
        className="w-15 sm:w-15  absolute top-20"
      />
      <span className="mt-5 text-xl font-medium absolute bottom-5">
        {temp}&deg;
      </span>
    </div>
  );
}

export default WeatherCard;

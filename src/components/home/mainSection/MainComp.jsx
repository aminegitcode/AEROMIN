import React, { useState } from "react";

import MainCard from "./MainCard";
function MainComp({weatherData,getCurrentTime,checkIsDay}) {
 
  return (
    <div className="flex flex-col relative transition-all w-full items-center justify-center">
      <MainCard weatherData={weatherData} getCurrentTime={getCurrentTime} checkIsDay={checkIsDay}/>
    </div>
  );
}

export default MainComp;

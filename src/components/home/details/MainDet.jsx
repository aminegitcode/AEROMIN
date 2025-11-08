import React,{useState} from 'react'
import Header from './HeaderDet'
import TodMain from './todayDet/TodMain';
import WeekMain from './weekDet/WeekMain';
function MainDet({weatherData, getSunTimes}) {
    const [detailsMenu,setDetailsMenu]=useState('today');
  return (
    <div className='bg-white flex flex-col mb-3 relative flex-1 rounded-2xl shadow-md border-1 border-gray-100'>
       
        <Header detailsMenu={detailsMenu} setDetailsMenu={setDetailsMenu}/>
        {detailsMenu === "today"? 
        <TodMain weatherData={weatherData} getSunTimes={getSunTimes}  />:
        
        <WeekMain weatherData={weatherData}/>}

    
      
    </div>
  )
}

export default MainDet

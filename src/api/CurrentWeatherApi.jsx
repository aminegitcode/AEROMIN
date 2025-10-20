const OPENWEATHERMAP_API_KEY= import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const OPENWEATHERMAP_URL="https://api.openweathermap.org/data/2.5/weather?"
export const CurrentWeatherApi =async ({lat,lon})=>{

    try{
        const response= await fetch(`${OPENWEATHERMAP_URL}lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHERMAP_API_KEY}`);
        const result = await response.json();

        return result;

    }catch(error){
        console.log(error);
        return null;
    };
    

}
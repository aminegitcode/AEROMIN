const LOCATIONIQ_API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;



export const SearchCitiesApi = async (inputValue) => {
  if (!inputValue) {
    return [];
  }

  try {
  
    const response = await fetch(
      `https://us1.locationiq.com/v1/search/structured?key=${LOCATIONIQ_API_KEY}&addressdetails=1&city=${inputValue}&format=json&limit=10`
    );

    const result = await response.json();
    console.log(result)
    const optionsData = result.map((res) => ({
      value: `${res.lat} ${res.lon}`,
      label: `${res.display_name}`, 
      lat: res.lat,
      lon: res.lon,
      village: res.address.village,
      city: `${res.address.city?`${res.address.city}`:`${res.address.town}`}`,
      country: res.address.country,
      state: res.address.state,
     
    }));

    return optionsData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

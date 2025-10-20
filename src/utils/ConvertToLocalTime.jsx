function ConvertToLocalTime(timestamp, timezoneOffset) {
  if (!timestamp || typeof timezoneOffset === "undefined") return "";

  
  const localTimestamp = (timestamp + timezoneOffset) * 1000;


  const localTime = new Date(localTimestamp);

  
  return localTime.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC", 
  });
}

export default ConvertToLocalTime;

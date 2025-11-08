import thunderstormIcon from "../assets/weather/thunderstorm.png";
import drizzleIcon from "../assets/weather/drizzle.png";
import rainIcon from "../assets/weather/rain.png";
import snowIcon from "../assets/weather/snow.png";
import atmosphereIcon from "../assets/weather/atmosphere.png";
import tornadoIcon from "../assets/weather/tornado.png";
import sunnyIcon from "../assets/weather/sunny.png";
import moonIcon from "../assets/weather/moon_stars.png";
import moonCloudyIcon from "../assets/weather/moon_cloudy.png";
import sunCloudyIcon from "../assets/weather/sun_cloudy.png";
import cloudsIcon from "../assets/weather/cloudy.png";


export const GetWeatherStyle = (type, isDay, weatherId) => {
  switch (type) {
    case "Thunderstorm":
      return {
        bgClass: "bg-sky-800/70 text-gray-200",
        icon: thunderstormIcon,
        iconClass: "drop-shadow-sky-300/50 drop-shadow-xl",
      };

    case "Drizzle":
      return {
        bgClass: "bg-sky-800/70 text-gray-200",
        icon: drizzleIcon,
        iconClass: "drop-shadow-sky-300/50 drop-shadow-xl",
      };

    case "Rain":
      if (weatherId === 511) {
        return {
          bgClass: "bg-sky-800/70 text-gray-200",
          icon: snowIcon,
          iconClass: "drop-shadow-sky-300/60 drop-shadow-xl",
        };
      }
      return {
        bgClass: "bg-sky-800/70 text-gray-200",
        icon: rainIcon,
        iconClass: "drop-shadow-sky-300/50 drop-shadow-xl",
      };

    case "Snow":
      return {
        bgClass: "bg-sky-800/70 text-gray-200",
        icon: snowIcon,
        iconClass: "drop-shadow-sky-300/50 drop-shadow-xl",
      };

    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
      return {
        bgClass: "bg-sky-100 text-gray-800 ",
        icon: atmosphereIcon,
        iconClass: "drop-shadow-sky-600/30 drop-shadow-xl",
      };

    case "Tornado":
      return {
        bgClass: "bg-sky-100",
        icon: tornadoIcon,
        iconClass: "drop-shadow-sky-00/50 drop-shadow-xl",
      };

    case "Clear":
      return {
        bgClass: isDay ? "bg-sky-200/90 text-gray-800" : "bg-sky-950",
        icon: isDay ? sunnyIcon : moonIcon,
        iconClass: isDay
          ? "drop-shadow-yellow-500/50 drop-shadow-xl"
          : "drop-shadow-blue-500/50 drop-shadow-xl",
      };

    case "Clouds":
      switch (weatherId) {
        case 801:
          return {
            bgClass: isDay ? "bg-sky-200/70 " : "bg-sky-800/70",
            icon: isDay ? sunCloudyIcon : moonCloudyIcon,
          };
        default:
          return {
            bgClass:  isDay ?"bg-sky-700/70 text-gray-200":"bg-sky-900/80 text-gray-100",
            icon: cloudsIcon,
            iconClass: "drop-shadow-sky-700/50 drop-shadow-xl",
          };
      }

    default:
      return {
        bgClass: "bg-white",
        icon: "❓",
      };
  }
};

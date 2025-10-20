import React, { useState, useRef, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { MapPin, Search, BellDot } from "lucide-react";
import MenuDropDown from "./MenuDropDown";
import { Squash as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import { SearchCitiesApi } from "../../../api/SearchCitiesApi";

function Navbar({
  profileImage,
  isOpenMobile,
  setIsOpenMobile,
  menuItem,
  cityCoord,
  setCityCoord,
}) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const searchRef = useRef(null);
  const location = useLocation(); // gets the current route

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        window.innerWidth < 1024
      ) {
        setIsSearching(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSearching(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // fuction for AsyncPaginate
  const loadOptions = async (inputValue) => {
    const options = await SearchCitiesApi(inputValue);

    return { options };
  };

  // handle city selection
  const handleOnChange = (selectedOption) => {
    setSearchValue(selectedOption);

    console.log(selectedOption.city);
    setCityCoord({
      name: `${selectedOption.village ? `${selectedOption.village}, ` : ""}${
        selectedOption.city ? selectedOption.city : selectedOption.state
      }, ${selectedOption.country}`,
      lat: selectedOption.lat,
      lon: selectedOption.lon,
    });
  };

  return (
    <div className="lg:pt-3 lg:px-6 pb-2 pt-2 z-50 w-full flex items-center justify-between lg:bg-transparent lg:relative rounded-b-4xl">
      {/* left part */}
      <div className="flex flex-col lg:flex-row items-center w-full px-2 lg:px-0">
        <div className="flex w-full lg:w-auto justify-between px-2 z-50 lg:relative">
          <div className={`xl:hidden z-50`}>
            <Hamburger
              toggled={isOpenMobile}
              size={30}
              color="#606060"
              onToggle={() => setIsOpenMobile(!isOpenMobile)}
            />
          </div>

          {/* overlay mobile */}
          {isOpenMobile && (
            <div
              className="fixed top-0 left-0 w-full h-full z-40 backdrop-blur-sm bg-black/30"
              onClick={() => setIsOpenMobile(false)}
            ></div>
          )}

          {/* menu mobile */}
          <div
            className={`overflow-hidden pb-5 transition-all duration-500 ease-in-out text-black z-49 flex pt-5 flex-col items-center fixed bg-white w-full left-0 top-0 ${
              isOpenMobile ? "translate-y-0" : "-translate-y-80"
            }`}
          >
            {menuItem.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="py-2 font-semibold active:text-purple-400 cursor-pointer"
                onClick={() => setIsOpenMobile(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* localisation actuelle */}
          <div className="flex items-center pr-3 text-gray-600 lg:text-gray-500 text-base md:text-lg font-semibold">
            <MapPin className="w-5 h-5" />
            <span className="ml-2 text-xl text-center">{cityCoord.name}</span>
          </div>

          {/* menu profil mobile */}
          <div className="mt-1 lg:hidden z-48">
            <MenuDropDown profileImage={profileImage} />
          </div>
        </div>
        {/* search */}
        {location.pathname === "/" && (
          <div
            ref={searchRef}
            className={`transition-all duration-500 ease-in-out flex items-center  shadow-md border border-gray-200 bg-white
            shadow-gray-100 rounded-2xl xl:w-96 xl:px-2 xl:py-2 ${
              isSearching
                ? "px-3 py-2 w-3/4 xl:w-96"
                : "justify-center p-2 w-12 h-12"
            }`}
          >
            <Search
              onClick={() => setIsSearching(true)}
              className="text-gray-500 w-5 h-5 transition-all duration-300 cursor-pointer"
              strokeWidth={2.5}
            />

            {isSearching && (
              <AsyncPaginate
                value={searchValue}
                loadOptions={loadOptions}
                onChange={handleOnChange}
                debounceTimeout={400}
                placeholder="Search city..."
                className="ml-3 w-full"
              />
            )}
          </div>
        )}
      </div>

      {/* right part / hide in small device*/}
      <div className="flex items-center gap-4 justify-end">
        <div className="hidden z-0 lg:block">
          <MenuDropDown profileImage={profileImage} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

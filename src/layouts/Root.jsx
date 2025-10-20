import { useState, useEffect } from "react";
import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/home/navbarr/Navbar";
import {
  LayoutDashboard,
  ChartNoAxesColumn,
  MapPinned,
  Info,
  Settings,
  CloudAlert,
} from "lucide-react";

import profile from "../assets/profile.png";

function Root() {
  const [isOpen, setIsOpen] = useState(false);
  // state for the profile picture
  const [profileImage, setProfileImage] = useState(
    () => localStorage.getItem("profileImage") || profile
  );

  const [cityCoord, setCityCoord] = useState(() => {
    // get saved coords if they exist
    const saved = localStorage.getItem("cityCoord");
    return saved
      ? JSON.parse(saved)
      : { name: "Paris, France", lat: 48.8589, lon:2.32 };
  });

  useEffect(() => {
    localStorage.setItem("cityCoord", JSON.stringify(cityCoord));
  }, [cityCoord]);

  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const menuItem = [
    {
      icon: <LayoutDashboard size={28} strokeWidth={1.5} />,
      name: "Home",
      path: "/",
    },
    

    
    {
      icon: <Info size={28} strokeWidth={1.5} />,
      name: "Contact",
      path: "/contact",
    },
    {
      icon: <Settings size={28} strokeWidth={1.5} />,
      name: "Settings",
      path: "/settings",
    },
  ];
  return (
    <div
      className={`${
        isOpenMobile ? "overflow-hidden" : ""
      } h-dvh xl:overflow-hidden flex flex-col bg-purple-50 xl:flex-row relative`}
    >
      <Sidebar menuItem={menuItem} isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 w-full bg-purple-50 xl:max-h-[1080px] z-10 xl:overflow-hidden flex flex-col">
        <Navbar
          menuItem={menuItem}
          profileImage={profileImage}
          isOpenMobile={isOpenMobile}
          setIsOpenMobile={setIsOpenMobile}
          cityCoord={cityCoord}
          setCityCoord={setCityCoord}
        />
        <Outlet context={{ profileImage, setProfileImage,cityCoord,setCityCoord }} />
      </main>
    </div>
  );
}

export default Root;

import React, { useState, useEffect } from "react";
import NavBarSett from "../components/settings/NavBarSett";
import Profile from "../components/settings/Profile";

import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";

function Settings() {
  const [settingsMenu, setSettingsMenu] = useState("profile");
  const { profileImage, setProfileImage } = useOutletContext();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(false); // reset animation
    const timer = setTimeout(() => setFadeIn(true), 10); // trigger animation
    return () => clearTimeout(timer);
  }, [settingsMenu]);

  return (
    <div className="flex flex-col p-2 mx-auto max-w-8xl w-full py-5">
      <div className="flex flex-col bg-white h-full rounded-md shadow-lg w-full pb-5">
        <div>
          <NavBarSett
            settingsMenu={settingsMenu}
            setSettingsMenu={setSettingsMenu}
          />
          <div className="bg-gray-200 w-full h-[2px]"></div>
        </div>

        <div
          style={{
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {settingsMenu === "profile" ? (
            <Profile profileImage={profileImage} setProfileImage={setProfileImage} />
          ) : (
            "coming soon..."
          )}
        </div>
      </div>

    </div>
  );
}

export default Settings;

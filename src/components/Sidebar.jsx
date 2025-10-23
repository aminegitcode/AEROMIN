import React, { useState, useEffect } from "react";
import logo from "../../src/assets/logo.png";

import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ChartNoAxesColumn,
  MapPinned,
  MessageCircleWarning,
  Info,
  Settings,
  LogOut,
  PanelLeftOpen,
  ChevronFirst,
  ChevronLast,
  CloudAlert,
  CloudSnow,
} from "lucide-react";

function Sidebar({
  isOpen,
  setIsOpen,

  menuItem,
}) {
  const [showToolTips, setShowToolTips] = useState(false);
  
  useEffect(() => {
    let timeout;
    if (!isOpen) {
      timeout = setTimeout(() => {
        setShowToolTips(true);
      }, 200);
    } else {
      setShowToolTips(false);
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`h-screen xl:block   left-0  text-gray-600    hidden transition-all    z-40 
      ${isOpen ? "w-64" : "w-20"}`}
    >
      <div
        className={`h-full flex flex-col     bg-white border-r border-gray-200 shadow-xl  ${
          !isOpen ? "" : ""
        }`}
      >
        <div
          className={` flex items-center  transition-all duration-300 ease-in-out h-24 px-4  ${
            !isOpen ? "justify-center" : "justify-between"
          }`}
        >
          <div
            className={`flex items-center overflow-hidden transition-all duration-300 ease-in-out 
            ${isOpen ? "opacity-100" : "opacity-0 w-0"}`}
          >
            <img src={logo} alt="logo" className="w-12 mr-2 " />
            <h1 className="text-2xl font-bold text-purple-500 ">eromin</h1>
          </div>

          <div
            onClick={toggle}
            className="cursor-pointer p-2 bg-purple-50 hover:text-purple-600 rounded-xl"
          >
            {isOpen ? <ChevronFirst size={28} /> : <ChevronLast size={28} />}
          </div>
        </div>

        <nav className="flex-1 ">
          <ul className="mt-2 px-3">
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                onClick={() => {
                  setIsOpen(false);
                }}
                key={index}
                className={({ isActive }) =>
                  `flex items-center relative group font-semibold  my-2 py-3 px-3 rounded-xl transition-all duration-200 ease-in-out 
                     ${
                       isActive
                         ? "bg-purple-100 text-purple-600"
                         : "hover:bg-purple-50"
                     }
                     ${isOpen ? "w-full" : "w-13"}
                     `
                }
              >
                <div>{item.icon}</div>
                <span
                  className={`ml-4 text-lg font-medium overflow-hidden transition-all duration-300 
                  ease-in-out ${
                    isOpen ? "opacity-100 w-full" : "opacity-0 w-0"
                  }`}
                >
                  {item.name}
                </span>

                {/*tooltip*/}
                {!isOpen && showToolTips && (
                  <div
                    className="absolute left-20 font-semibold bg-purple-100 text-purple-800 px-3 py-1
                     rounded-md opacity-0 invisible -translate-x-3
                      group-hover:opacity-90 group-hover:visible group-hover:translate-x-0 transition-all  "
                  >
                    {item.name}
                  </div>
                )}
              </NavLink>
            ))}
          </ul>
        </nav>
        <div
          className="flex items-center  mx-4 my-3 py-3 px-3 rounded-xl cursor-pointer  hover:text-purple-600
          transition-all duration-200 ease-in-out "
        >
          <LogOut size={30} className="absolute bottom-6" />
          <span
            className={` ml-10 text-xl font-medium overflow-hidden transition-all duration-100 
            ease-in-out ${
              isOpen ? "opacity-100 delay-100 duration-200 " : "opacity-0  "
            }`}
          >
            Sign out{" "}
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;


import React from "react";

const SideBarItems = [
  { name: "Profile", value: "profile" },
  { name: "Other", value: "other" },
];

function NavBarSett({ settingsMenu, setSettingsMenu }) {
  return (
    <div className="flex justify-between outline-none border-none  rounded-xl  items-center m-1 sm:m-2 text-xl text-gray-500 font-medium">
      <div className="flex-1 flex gap-2">
        {SideBarItems.map((item) => (
          <button
            key={item.value}
            onClick={() => setSettingsMenu(item.value)}
            className={`relative py-1 px-3 rounded-xl hover:cursor-pointer
              after:block after:h-[2px] after:bg-gray-500 after:text-purple-700
              after:scale-x-0 hover:after:scale-x-100 
              after:origin-center after:transition-transform after:duration-300
              ${
                settingsMenu === item.value
                  ? "after:scale-x-100 text-purple-700"
                  : ""
              }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavBarSett;


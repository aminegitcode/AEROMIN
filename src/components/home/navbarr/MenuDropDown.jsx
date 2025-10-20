import { Menu } from "@headlessui/react";
import {
  CircleUserRound,
  Settings,
  Info,
  LogOut,
  BellDot,
  MapPin,
} from "lucide-react";
import profile from "../../../assets/profile.png";
import { Link } from "react-router-dom";

export default function MenuDropDown({profileImage}) {
  return (
    <div className="text-right  transition-all duration-300 outline-none focus:outline-none ">
      <Menu as="div" className="relative ">
        <Menu.Button className="rounded-full items-center outline-none  overflow-hidden md:w-13 md:h-13 w-11 h-11  shadow-md cursor-pointer focus:outline-none">
          <img src={profileImage} alt="profile" />
        </Menu.Button>

        <Menu.Items className="absolute right-0 border  outline-none focus:outline-none border-gray-200 mt-2 w-60 origin-top-right rounded-2xl bg-white p-1 text-md text-gray-800 shadow-lg z-50">
          <Menu.Item className=" mt-1">
            <Link to="./settings" className="flex items-center gap-4 w-full px-3 py-2 rounded-xl hover:bg-gray-100">
              <CircleUserRound className="w-5 text-gray-700" />
              Profile
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="./settings" className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-gray-100">
              <Settings className="w-5 text-gray-700" />
              Settings
            </Link>
          </Menu.Item>

          

          

       
          <div className="bg-gray-200 h-px mx-2 my-2" />

          <Menu.Item className=" mb-1">
            <Link to="./contact" className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-gray-100">
              <Info className="w-5 text-gray-700" />
              Contact
            </Link>
          </Menu.Item>

          <Menu.Item className=" mb-1">
            <button className="flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-gray-100">
              <LogOut className="w-5 text-gray-700" />
              Sign out
            </button>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

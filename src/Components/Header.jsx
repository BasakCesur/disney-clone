import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINAL", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[150px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => {
            return <HeaderItem name={item.name} icon={item.icon} />; // Map fonksyionu her çalışığında <HeaderItem name="HOME" icon={HiHome} /> vb. döner
          })}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} icon={item.icon} />
          )}
        </div>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={""} icon={HiDotsVertical} />
          {toggle ? (
            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
              {menu.map(
                (item, index) =>
                  index > 2 && <HeaderItem name={item.name} icon={item.icon} />
              )}
            </div>
          ) : null}
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;

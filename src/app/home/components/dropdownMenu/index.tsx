import { useRef, useState } from "react";
import { logoutUser } from "../../../actions/auth";
import { FaUserAlt, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useClickOutside } from "@/hooks/useClickOutside";

export const Dropdown = () => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => {
    if (showDropdownMenu) handleOpenCloseMenu();
  });

  function handleOpenCloseMenu() {
    setShowDropdownMenu((prev) => !prev);
  }

  return (
    <div className="flex flex-col" ref={ref}>
      <div>
        <div className="flex justify-end ">
          <button
            className="relative h-9 w-9 rounded-full bg-slate-500 flex justify-center"
            onClick={handleOpenCloseMenu}
            aria-label="Open"
          >
            <FaUserAlt className="text-xl mt-1.5 text-slate-300" />
          </button>
        </div>
      </div>
      {showDropdownMenu ? (
        <div className="border p-2 bg-white rounded-md shadow text-sm w-32 mt-2 absolute right-6 top-12">
          <div className="flex my-2 hover:cursor-pointer">
            <FaUserAlt className="mr-2 h-4 w-4 text-slate-700 mt-0.5" />
            <span>Profile</span>
          </div>
          <div className="flex my-2 hover:cursor-pointer mt-3">
            <FaCog className="mr-2 h-4 w-4 text-slate-700 mt-0.5" />
            <span>Settings</span>
          </div>
          <div />
          <hr />
          <div
            className="flex mt-2 hover:cursor-pointer"
            onClick={() => logoutUser()}
            aria-label="Logout"
          >
            <FaSignOutAlt className="mr-2 h-4 w-4 text-slate-700 mt-1" />
            <span>Log out</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

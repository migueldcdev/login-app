import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

import { logoutUser } from "../../actions/auth";
import { FaUserAlt, FaCog, FaSignOutAlt } from "react-icons/fa";

export const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative h-9 w-9 rounded-full bg-slate-500 flex justify-center">
          <FaUserAlt className="text-xl mt-1.5 text-slate-300" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <FaUserAlt className="mr-2 h-4 w-4 text-slate-700" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FaCog className="mr-2 h-4 w-4 text-slate-700" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logoutUser()}>
          <FaSignOutAlt className="mr-2 h-4 w-4 text-slate-700" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

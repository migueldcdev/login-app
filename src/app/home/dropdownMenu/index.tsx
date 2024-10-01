import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "./dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { logoutUser } from "../../actions/auth";

export const Dropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button                    
                    className="relative h-9 w-9 rounded-full bg-slate-500 flex justify-center"
                >
                    <User className="mt-1 text-slate-300"/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logoutUser()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
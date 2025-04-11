import { useAuth } from "../../hooks/authProvider";
import { Link } from "@tanstack/react-router";
import { DropdownMenu } from "radix-ui";
import { BiCog } from "react-icons/bi";

export const SettingsDropdown = () => {
  const auth = useAuth();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="text-white mx-1 bg-[#ec221f] rounded-sm px-6 py-3 text-lg cursor-pointer transition-colors hover:bg-[#c00f0c]"
          aria-label="Settings"
        >
          <BiCog />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[100px] me-2 rounded-lg bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] 
          will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade 
          data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade">
          <DropdownMenu.Item className="cursor-pointer hover:bg-gray-200 p-2 transition-colors rounded-md">
            <Link to="/settings">
              Settings
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => auth.logOut()}
            className="cursor-pointer hover:bg-gray-200 p-2 transition-colors rounded-md"
          >
            Log Out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

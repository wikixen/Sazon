import { Link } from "@tanstack/react-router";
import { DropdownMenu } from "radix-ui";
import { IconType } from "react-icons";

interface SettingsDropdownType {
  BtnContent: IconType | string;
  dropdownItems: DropdownItem[];
}

interface DropdownItem {
  name: string;
  hyperlink?: string;
  onClick?: () => void;
}

// SettingsDropdown is the dropdown menu for the Settings Dropdown in AuthHeaderBtns
export const SettingsDropdown = (
  { BtnContent, dropdownItems }: SettingsDropdownType,
) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="text-white mx-1 bg-[#ec221f] rounded-sm px-6 py-3 text-lg cursor-pointer transition-colors hover:bg-[#c00f0c]"
          aria-label="Settings"
        >
          {typeof BtnContent === "string" ? BtnContent : <BtnContent />}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[100px] me-2 rounded-lg bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] 
          will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade 
          data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade">
          {dropdownItems.map((item) => (
            <DropdownMenu.Item className="cursor-pointer hover:bg-gray-200 p-2 transition-colors rounded-md">
              <Link to={item.hyperlink}>
                {item.name}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

import { DropdownMenu } from "radix-ui";
import { IconType } from "react-icons";

interface DropdownItem {
  name: string;
  onClick?: () => void;
}

// Dropdown menu for Settings Dropdown in AuthHeaderBtns
export default function HeaderDropdown(
  { BtnContent, dropdownItems }: {
    BtnContent: IconType | string;
    dropdownItems: DropdownItem[];
  },
) {
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
            <DropdownMenu.Item
              {...item.onClick}
              className="cursor-pointer hover:bg-gray-200 p-2 transition-colors rounded-md"
            >
              {item.name}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

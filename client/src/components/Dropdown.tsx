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
        <button className="authHeaderBtn" aria-label="Settings">
          {typeof BtnContent === "string" ? BtnContent : <BtnContent />}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          {dropdownItems.map((item) => (
            <DropdownMenu.Item {...item.onClick}>
              {item.name}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

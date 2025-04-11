import { IconContext, IconType } from "react-icons";
import { BiCog, BiFridge, BiHomeAlt2, BiPlusCircle } from "react-icons/bi";
import { SettingsDropdown } from "./headerDropdown";
import IconBtn from "../IconBtn";

interface IconBtnItem {
  icon: IconType;
  btnDesc: string;
  hyperlink: string;
}

// HeaderAuthBtns is the header toolbar shown when a user is logged in
export const HeaderAuthBtns = () => {
  const dropdownItems = [{ name: "Settings", hyperlink: "/settings" }, {
    name: "Log Out",
  }];

  const headerBtns: IconBtnItem[] = [
    { icon: BiHomeAlt2, btnDesc: "Home", hyperlink: "/home" },
    { icon: BiFridge, btnDesc: "Check your pantry", hyperlink: "/pantry" },
    {
      icon: BiPlusCircle,
      btnDesc: "Create a recipe",
      hyperlink: "/recipe/new",
    },
  ];

  return (
    <>
      <div>
        <IconContext.Provider value={{ color: "white" }}>
          {headerBtns.map((item) => (
            <IconBtn
              Icon={item.icon}
              btnDesc={item.btnDesc}
              hyperlink={item.hyperlink}
            />
          ))}
          <SettingsDropdown BtnContent={BiCog} dropdownItems={dropdownItems} />
        </IconContext.Provider>
      </div>
    </>
  );
};

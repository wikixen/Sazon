import { IconContext, IconType } from "react-icons";
import { BiFridge, BiHomeAlt2, BiPlusCircle } from "react-icons/bi";
import IconBtn from "../IconBtn";
import { SettingsDropdown } from "./headerDropdown";

interface IconBtnItem {
  icon: IconType;
  btnDesc: string;
  hyperlink: string;
}

// HeaderAuthBtns is the header toolbar shown when a user is logged in
export const HeaderAuthBtns = () => {
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
          <SettingsDropdown />
        </IconContext.Provider>
      </div>
    </>
  );
};

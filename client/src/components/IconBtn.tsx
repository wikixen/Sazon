import { Link } from "@tanstack/react-router";
import { IconType } from "react-icons";

interface IconBtnItem {
  Icon: IconType;
  btnDesc?: string;
  hyperlink?: string;
}

export default function IconBtn(
  { Icon, btnDesc, hyperlink }: IconBtnItem,
) {
  if (!hyperlink) {
    return (
      <button className="text-white mx-1 bg-[#ec221f] rounded-sm px-6 py-3 text-lg cursor-pointer transition-colors hover:bg-[#c00f0c]">
        <Icon />
      </button>
    );
  } else {
    return (
      <Link to={hyperlink}>
        <button className="text-white mx-1 bg-[#ec221f] rounded-sm px-6 py-3 text-lg cursor-pointer transition-colors hover:bg-[#c00f0c]">
          <Icon />
        </button>
      </Link>
    );
  }
}

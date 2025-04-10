import { Link } from "@tanstack/react-router";
import { Tooltip } from "radix-ui";
import { IconType } from "react-icons";

interface IconBtnItem {
  Icon?: IconType;
  btnDesc?: string;
  hyperlink?: string;
}

export default function IconBtn(
  { Icon, btnDesc, hyperlink }: IconBtnItem,
) {
  if (Icon) {
    return (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Link to={hyperlink}>
              <button className="text-white mx-1 bg-[#ec221f] rounded-sm px-6 py-3 text-lg cursor-pointer transition-colors hover:bg-[#c00f0c]">
                <Icon />
              </button>
            </Link>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="select-none rounded bg-gray-200 px-[15px] py-2.5 text-[15px] leading-none will-change-[transform,opacity] 
                data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade 
                data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
              sideOffset={5}
            >
              {btnDesc}
              <Tooltip.Arrow className="fill-white" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  }
}

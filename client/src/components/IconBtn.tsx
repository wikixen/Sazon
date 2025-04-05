import { Tooltip } from "radix-ui";
import { IconType } from "react-icons";

export default function IconBtn(
  { Icon, btnDesc, className }: {
    Icon: IconType;
    btnDesc: string;
    className: string;
  },
) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className={className}>
            <Icon />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>
            {btnDesc}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

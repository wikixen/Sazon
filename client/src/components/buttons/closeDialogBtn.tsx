import { Dialog } from "radix-ui";
import { IconContext } from "react-icons";
import { BiX } from "react-icons/bi";

export const CloseDialogBtn = () => {
  return (
    <Dialog.Close asChild>
      <button
        aria-label="Close"
        className="cursor-pointer transition-colors hover:bg-gray-100 rounded-md"
      >
        <IconContext.Provider value={{ size: "2rem" }}>
          <BiX />
        </IconContext.Provider>
      </button>
    </Dialog.Close>
  );
};

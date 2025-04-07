import { Dialog } from "radix-ui";
import { IconContext } from "react-icons";
import { BiX } from "react-icons/bi";

interface DialogProps {
  aria: string;
  button: JSX.Element;
  content: JSX.Element;
}

export default function HeaderDialog(
  { aria, button, content }: DialogProps,
) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {button}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 shadow rounded-md bg-white"
          aria-describedby={aria}
        >
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
          {content}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

import { Dialog } from "radix-ui";
import { BiX } from "react-icons/bi";

interface DialogProps {
  button: JSX.Element
}

export default function HeaderDialog(
  {button}: DialogProps
) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {button}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <fieldset>
            <label htmlFor="name">
              Name
            </label>
            <input id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <fieldset>
            <label htmlFor="username">
              Username
            </label>
            <input id="username" defaultValue="@peduarte" />
          </fieldset>
          <Dialog.Close asChild>
            <button>Save changes</button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button aria-label="Close">
              <BiX />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

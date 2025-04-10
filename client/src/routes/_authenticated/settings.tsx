import { CloseDialogBtn } from "../../components/buttons/closeDialogBtn";
import { createFileRoute } from "@tanstack/react-router";
import { Dialog } from "radix-ui";
import { IconContext } from "react-icons";
import { BiX } from "react-icons/bi";
import { useAppForm } from "../../components/forms";

export const Route = createFileRoute("/_authenticated/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="flex flex-col my-8 mx-4 gap-2 items-center justify-center">
      <h1 className="text-4xl">Settings</h1>
      <article className="flex flex-col gap-6 mt-2 items-center">
        <SettingsDialog
          label={"Email"}
          inputType={"email"}
          btnText={"Change Email"}
        />
        <SettingsDialog
          label={"Password"}
          inputType={"password"}
          btnText={"Change Password"}
        />
        <DeleteDialog />
      </article>
    </section>
  );
}

interface SettingsFormType {
  label: string;
  inputType: string;
  btnText: string;
}

// SettingsDialog are the dialogs for the change email & password forms
const SettingsDialog = (settingsObject: SettingsFormType) => {
  const form = useAppForm({
    defaultValues: {
      oldVal: "",
      newVal: "",
    },
    validators: {
      onChangeAsyncDebounceMs: 1000,
      onChangeAsync: (value) => {
        if (
          settingsObject.inputType === "email" &&
          !value.value.newVal.includes("@")
        ) return "Email must be valid";
        if (
          settingsObject.inputType === "password" &&
          value.value.newVal.indexOf(" ") >= 0
        ) return "Password must be valid";
        if (
          settingsObject.inputType === "password" &&
          value.value.newVal.length >= 6
        ) return "Password must be longer than 6 characters";
      },
    },
  });
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <article>
          <button className="w-[10rem] cursor-pointer bg-white border-1 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            {settingsObject.btnText}
          </button>
        </article>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 shadow rounded-md bg-white"
          aria-describedby={settingsObject.btnText}
        >
          <Dialog.Close asChild>
            <CloseDialogBtn />
          </Dialog.Close>
          <form
            className="flex flex-col gap-4 items-start justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <form.AppField
              name="oldVal"
              children={(field) => (
                <field.TextField
                  label={"Old " + settingsObject.label}
                  hidden={false}
                  styles="py-1 px-4"
                  type={settingsObject.inputType}
                />
              )}
            />
            <form.AppField
              name="newVal"
              children={(field) => (
                <field.TextField
                  label={"New " + settingsObject.label}
                  hidden={false}
                  styles="py-1 px-4"
                  type={settingsObject.inputType}
                />
              )}
            />
            <Dialog.Close>
              <form.AppForm>
                <form.SubmitBtn styles="">
                  {settingsObject.btnText}
                </form.SubmitBtn>
              </form.AppForm>
            </Dialog.Close>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

// DeleteDialog is the dialog that shows up to confirm whether or not you want to delete your account
const DeleteDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="w-[10rem] cursor-pointer bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-700 transition-colors">
          Delete Account
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 shadow rounded-md bg-white"
          aria-describedby="Account Deletion Confirmation"
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
          <div className="flex flex-col gap-4 items-center p-2">
            <Dialog.Title className="mb-8 text-2xl">
              Are you sure?
            </Dialog.Title>
            <Dialog.Close>
              <div className="flex gap-2">
                <button className="w-[5rem] cursor-pointer bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-700 transition-colors">
                  No
                </button>
                <button className="w-[5rem] cursor-pointer bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-700 transition-colors">
                  Yes
                </button>
              </div>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

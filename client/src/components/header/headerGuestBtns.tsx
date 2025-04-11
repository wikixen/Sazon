import { Dialog, Tabs } from "radix-ui";
import { CloseDialogBtn } from "../buttons/closeDialogBtn";
import { useAppForm } from "../forms";
import { useAuth } from "../../hooks/authProvider";

// HeaderGuestBtns are the buttons displayed on the landing page for guests
export const HeaderGuestBtns = () => {
  const auth = useAuth();
  const tabs = ["Login", "Sign Up"];

  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      // console.log(value);
      auth.loginAction(value);
    },
    validators: {
      onSubmit: ({ value }) => {
        if (value.email === "" || value.password === "") {
          return "Forms can't be empty";
        }
        if (!value.email.includes("@")) return "Enter a valid email address";
        if (value.email.indexOf(" ") >= 0) return "Enter a valid email";
        if (value.password.indexOf(" ") >= 0) return "Enter a valid password";
      },
    },
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="mx-1 mt-4 border-white border-1 bg-[#ec221f] rounded-sm px-2 py-3 text-lg cursor-pointer transition-colors hover:bg-[#c00f0c]">
          {tabs[0] + " or " + tabs[1]}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 shadow rounded-md bg-white"
          aria-describedby="Login or Sign Up"
        >
          <CloseDialogBtn />
          <Tabs.Root
            className="flex w-[300px] flex-col"
            defaultValue="tab1"
          >
            <Tabs.List
              className="flex shrink-0 border-b"
              aria-label="Login or Sign Up"
            >
              {tabs.map((tab, i) => (
                <Tabs.Trigger
                  className="flex h-[45px] flex-1 select-none items-center justify-center bg-white px-5 text-[15px] leading-none 
                  outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] 
                  data-[state=active]:shadow-current data-[state=active]:focus:relative hover:bg-gray-100 cursor-pointer transition-colors"
                  value={`tab${i + 1}`}
                >
                  {tab}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <Tabs.Content
              className="grow rounded-b-md bg-white p-5 outline-none"
              value={"tab1"}
            >
              <form
                className="flex flex-col gap-4 items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
              >
                <form.AppField
                  name="email"
                  children={(field) => (
                    <field.TextField
                      label="Email"
                      hidden={false}
                      type="email"
                      styles="w-full px-4 p-1"
                    />
                  )}
                />
                <form.AppField
                  name="password"
                  children={(field) => (
                    <field.TextField
                      label="Password"
                      hidden={false}
                      type="password"
                      styles="w-full px-4 p-1"
                    />
                  )}
                />
                <Dialog.Close asChild>
                  <form.AppForm>
                    <form.SubmitBtn styles="">Sign In</form.SubmitBtn>
                  </form.AppForm>
                </Dialog.Close>
              </form>
            </Tabs.Content>
            <Tabs.Content
              className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              value="tab2"
            >
              <form
                className="flex flex-col gap-4 items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
              >
                <form.AppField
                  name="email"
                  children={(field) => (
                    <field.TextField
                      label="Email"
                      hidden={false}
                      type="email"
                      styles="w-full px-4 p-1"
                    />
                  )}
                />
                <form.AppField
                  name="password"
                  children={(field) => (
                    <field.TextField
                      label="Password"
                      hidden={false}
                      type="password"
                      styles="w-full px-4 p-1"
                    />
                  )}
                />
                <Dialog.Close asChild>
                  <form.AppForm>
                    <form.SubmitBtn styles="">Sign Up</form.SubmitBtn>
                  </form.AppForm>
                </Dialog.Close>
              </form>
            </Tabs.Content>
          </Tabs.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

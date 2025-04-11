import { createFileRoute } from "@tanstack/react-router";
import { Dialog } from "radix-ui";
import { IconContext } from "react-icons";
import { BiPlus, BiTrash, BiX } from "react-icons/bi";
import { CloseDialogBtn } from "../../components/buttons/closeDialogBtn";
import { useAppForm } from "../../components/forms";
import { sampleUserData } from "../../data/sampleUserData";

export const Route = createFileRoute("/_authenticated/pantry")({
  component: RouteComponent,
});

function RouteComponent() {
  const userPantry = sampleUserData[0].pantry;

  return (
    <section className="flex flex-col mx-4 my-8 gap-8">
      <AddPantryDialog />
      <ul className="flex flex-row flex-wrap gap-2">
        {userPantry?.map((ingredient) => (
          <li className="flex flex-row items-center justify-between border-1 rounded-md p-2 w-[12rem] h-[3rem]">
            {ingredient}
            <button className="text-white mx-1 bg-[#ec221f] rounded-sm p-1 text-lg cursor-pointer transition-colors hover:bg-[#c00f0c]">
              <BiTrash />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

const AddPantryDialog = () => {
  const form = useAppForm({
    defaultValues: {
      name: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger
          asChild
          className="cursor-pointer flex flex-row items-center justify-center"
        >
          <section>
            <label htmlFor="CreateIngredient">
              Add an Ingredient to your pantry
            </label>
            <button className="text-white mx-1 bg-[#ec221f] rounded-sm p-1 text-lg cursor-pointer transition-colors hover:bg-[#c00f0c]">
              <BiPlus />
            </button>
          </section>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 shadow rounded-md bg-white"
            aria-describedby="Create an Ingredient"
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="flex flex-col gap-2 p-4"
            >
              <form.AppField
                name="name"
                children={(field) => (
                  <field.TextField
                    label="Ingredient Name"
                    hidden={false}
                    styles=""
                    type="text"
                  />
                )}
              />
              <Dialog.Close>
                <form.AppForm>
                  <form.SubmitBtn styles="">Submit</form.SubmitBtn>
                </form.AppForm>
              </Dialog.Close>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

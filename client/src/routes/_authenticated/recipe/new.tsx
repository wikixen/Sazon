import { BiX } from "react-icons/bi";
import { useAppForm } from "../../../components/forms/index";
import { createFileRoute } from "@tanstack/react-router";
import { IconContext } from "react-icons";

export const Route = createFileRoute("/_authenticated/recipe/new")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useAppForm({
    defaultValues: {
      name: "",
      desc: "",
      ingredients: [""] as string[],
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
  return (
    <section className="flex flex-col mx-5 my-4">
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.AppField
          name="name"
          children={(field) => (
            <field.TextField
              label="Name"
              hidden={false}
              type="text"
              styles="w-full px-4 p-1"
            />
          )}
        />
        <form.AppField
          name="desc"
          children={(field) => (
            <field.AreaField
              styles="w-full"
              label="Description"
              hidden={false}
            />
          )}
        />
        <form.AppField
          name="ingredients"
          mode="array"
          children={(field) => (
            <div className="flex flex-col gap-2 items-start">
              <label>Ingredients</label>
              {field.state.value.map((_, index) => (
                <form.AppField
                  name={`ingredients[${index}]`}
                  children={(subfield) => (
                    <div className="flex flex-row gap-2">
                      <input
                        className="outline-none border-1 rounded-md w-[20rem]"
                        type="text"
                        autoFocus
                        value={subfield.state.value}
                        onChange={(e) => subfield.handleChange(e.target.value)}
                      />
                      <form.AppForm>
                        <form.RemoveBtn
                          onClick={() => field.removeValue(index)}
                        >
                          <BiX />
                        </form.RemoveBtn>
                      </form.AppForm>
                    </div>
                  )}
                />
              ))}
              <form.AppForm>
                <form.PushBtn onClick={() => field.pushValue("")}>
                  Add Ingredient
                </form.PushBtn>
              </form.AppForm>
            </div>
          )}
        />
        <form.AppForm>
          <form.SubmitBtn styles="w-[10rem]">Create Recipe</form.SubmitBtn>
        </form.AppForm>
      </form>
    </section>
  );
}

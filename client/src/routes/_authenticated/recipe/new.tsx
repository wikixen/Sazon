import { useAppForm } from "../../../components/forms/index";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/recipe/new")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useAppForm({
    defaultValues: {
      name: "",
      desc: "",
      ingredients: [] as string[],
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
  return (
    <section>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <form.AppField
          name="name"
          children={(field) => (
            <field.TextField
              label="Name"
              hidden={false}
              type="text"
              styles="w-120 px-4 p-1"
            />
          )}
        />
        <form.AppField
          name="desc"
          children={(field) => (
            <field.AreaField label="Description" hidden={false} />
          )}
        />
      </form>
    </section>
  );
}

import { useForm } from "@tanstack/react-form";

export default function ContactForm(
  { subjectDesc }: { subjectDesc: string },
) {
  const form = useForm({
    defaultValues: {
      subject: "",
      body: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
  return (
    <section className="flex flex-row gap-6 items-center justify-center">
      <form
        className="flex flex-col gap-4 items-center"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="subject"
          children={(field) => (
            <label htmlFor="subject" className="text-xl text-center">
              {subjectDesc}
              <br />
              <input
                id="subject"
                className="w-120 px-4 p-1 outline-none border-1 rounded-md"
                type="text"
                name="subject"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)}
              />
            </label>
          )}
        />
        <form.Field
          name="body"
          children={(field) => (
            <textarea
              id="body"
              className="w-120 h-80 p-4 outline-none border-1 rounded-md resize-none"
              name="body"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        />
        <button
          type="submit"
          onClick={form.handleSubmit}
          className="text-white w-30 bg-[#ec221f] rounded-sm px-2 py-3 text-lg cursor-pointer transition-colors hover:bg-[#c00f0c]"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

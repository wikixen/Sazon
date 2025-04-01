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
    <section className="contactForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="subject"
          children={(field) => (
            <label htmlFor="subject">
              {subjectDesc}
              <br />
              <input
                id="subject"
                type="text"
                name="subject"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </label>
          )}
        />
        <form.Field
          name="body"
          children={(field) => (
            <input
              id="body"
              type="text"
              name="body"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        />
        <button
          type="submit"
          onClick={form.handleSubmit}
          className="contactBtn"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

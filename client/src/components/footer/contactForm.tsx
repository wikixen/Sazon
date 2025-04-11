import { useAppForm } from "../forms/index";

interface ContactFormProps {
  title: string;
}

export const ContactForm = ({ title }: ContactFormProps) => {
  const form = useAppForm({
    defaultValues: {
      subject: "",
      body: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return (
    <form
      className="flex flex-col gap-4 items-center justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <h1 className="text-lg">{title}</h1>
      <form.AppField
        name="subject"
        children={(field) => (
          <field.TextField
            label="Subject"
            hidden={true}
            type="text"
            styles="w-120 px-4 p-1"
          />
        )}
      />
      <form.AppField
        name="body"
        children={(field) => (
          <field.AreaField styles="w-120" label="Body" hidden={true} />
        )}
      />
      <form.AppForm>
        <form.SubmitBtn styles="">Submit</form.SubmitBtn>
      </form.AppForm>
    </form>
  );
};

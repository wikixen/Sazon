import { useFieldContext } from ".";
import { FieldErrors } from "./fieldErrors";

interface ArrayFieldProps {
  label: string;
  hidden: boolean;
  styles: string;
  type: string;
}

export const ArrayField = (
  { label, hidden, styles, type }: ArrayFieldProps,
) => {
  const field = useFieldContext<string[]>();

  return (
    <section className="flex flex-col gap-2">
      <label
        htmlFor={field.name}
        className="text-xl"
        hidden={hidden}
      >
        {label}
      </label>
      {field.state.value.map((_, index) => (
        <article
          key={index}
          className={`${styles} outline-none border-1 rounded-md`}
        >
        </article>
      ))}
      <input
        className={`${styles} outline-none border-1 rounded-md`}
        id={field.name}
        type={type}
        value={field.state.value}
        // onChange={(e) => field.handleChange(e.target.value)}
      />
      <FieldErrors meta={field.state.meta} />
    </section>
  );
};

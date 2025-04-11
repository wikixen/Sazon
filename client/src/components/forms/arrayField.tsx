import { useFieldContext } from ".";
import { FieldErrors } from "./fieldErrors";

interface ArrayFieldProps {
  label: string;
  hidden: boolean;
  styles: string;
  type: string;
}

// This component is incomplete and I will revisit in the future
// It's supposed to be used in recipe/new for adding ingredients
export const ArrayField = (
  { label, hidden, styles, type }: ArrayFieldProps,
) => {
  const field = useFieldContext<string[]>();

  return (
    <article className="flex flex-col gap-2">
      <label
        htmlFor={field.name}
        className="text-xl"
        hidden={hidden}
      >
        {label}
      </label>

      {field.state.value.map((_, index) => (
        <article className="flex flex-col gap-2" key={index}>
          <input
            className={`${styles} outline-none border-1 rounded-md`}
            id={field.name}
            type={type}
            value={field.state.value}
          />
        </article>
      ))}
      <FieldErrors meta={field.state.meta} />
    </article>
  );
};

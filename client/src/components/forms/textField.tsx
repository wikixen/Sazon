import { useFieldContext } from ".";
import { FieldErrors } from "./fieldErrors";

interface TextFieldProps {
  label: string;
  hidden: boolean;
  styles: string;
  type: string;
}

export const TextField = ({ label, hidden, styles, type }: TextFieldProps) => {
  const field = useFieldContext<string>();

  return (
    <article className="flex flex-col gap-2">
      <label
        htmlFor={field.name}
        className="text-xl"
        hidden={hidden}
      >
        {label}
      </label>
      <input
        className={`${styles} outline-none border-1 rounded-md`}
        id={field.name}
        type={type}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      <FieldErrors meta={field.state.meta} />
    </article>
  );
};

import { useFieldContext } from ".";
import { FieldErrors } from "./fieldErrors";

interface TextFieldProps {
  label: string;
  hidden: boolean;
  styles: string;
}

// AreaField allows for reusable TextArea forms with Tanstack form
export const AreaField = ({ label, hidden, styles }: TextFieldProps) => {
  const field = useFieldContext<string>();

  return (
    <article className="flex flex-col gap-2">
      <label
        hidden={hidden}
        htmlFor={field.name}
        className="text-xl"
      >
        {label}
      </label>
      <textarea
        id="body"
        className={`${styles} w-120 h-80 p-4 border-1 rounded-md resize-none focus:outline-red-500 focus:outline-1`}
        name="body"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      <FieldErrors meta={field.state.meta} />
    </article>
  );
};

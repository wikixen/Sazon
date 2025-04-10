import { useFieldContext } from ".";
import { FieldErrors } from "./fieldErrors";

interface TextFieldProps {
  label: string;
  hidden: boolean;
}

export const AreaField = ({ label, hidden }: TextFieldProps) => {
  const field = useFieldContext<string>();

  return (
    <article>
      <label
        hidden={hidden}
        htmlFor={field.name}
        className="text-xl text-center"
      >
        {label}
      </label>
      <textarea
        id="body"
        className="w-120 h-80 p-4 outline-none border-1 rounded-md resize-none"
        name="body"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      <FieldErrors meta={field.state.meta} />
    </article>
  );
};

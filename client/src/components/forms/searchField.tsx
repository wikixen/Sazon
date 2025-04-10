import { useFieldContext } from ".";

interface SearchFieldProps {
  styles: string;
  placeholder: string;
}

export const SearchField = ({ styles, placeholder }: SearchFieldProps) => {
  const field = useFieldContext<string>();

  return (
    <input
      className={styles}
      id={field.name}
      type="text"
      placeholder={placeholder}
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
    />
  );
};

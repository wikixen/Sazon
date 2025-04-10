import { useStore } from "@tanstack/react-store";
import { useFormContext } from ".";

interface SubmitBtnProps {
  children: React.ReactNode;
  styles: string;
}

export const SubmitBtn = ({ children, styles }: SubmitBtnProps) => {
  const form = useFormContext();

  const [isSubmitting, canSubmit] = useStore(form.store, (state) => [
    state.isSubmitting,
    state.canSubmit,
  ]);

  return (
    <button
      type="submit"
      className={`${styles} text-white bg-[#ec221f] rounded-sm px-2 py-3 text-lg cursor-pointer transition-colors hover:bg-[#c00f0c]`}
      disabled={isSubmitting || !canSubmit}
    >
      {children}
    </button>
  );
};

import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { TextField } from "./textField";
import { AreaField } from "./areaField";
import { SubmitBtn } from "./submitBtn";
import { SearchField } from "./searchField";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    AreaField,
    SearchField,
  },
  formComponents: {
    SubmitBtn,
  },
  fieldContext,
  formContext,
});

import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { TextField } from "./textField";
import { AreaField } from "./areaField";
import { SubmitBtn } from "./submitBtn";
import { SearchField } from "./searchField";
import { ArrayField } from "./arrayField";
import { PushBtn, RemoveBtn } from "./arrayFieldBtns";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    AreaField,
    SearchField,
    ArrayField,
  },
  formComponents: {
    SubmitBtn,
    PushBtn,
    RemoveBtn,
  },
  fieldContext,
  formContext,
});

import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";
import { useAppForm } from "../forms";

export const SearchBar = () => {
  const form = useAppForm({
    defaultValues: {
      query: "",
    },
  });
  return (
    <article className="w-max min-w-[300px] flex items-center px-2 py-3 rounded-full bg-[#ffd8e4]">
      <IconContext.Provider value={{ color: "#49454F", size: "1.25rem" }}>
        <BiSearch />
      </IconContext.Provider>

      <form.AppField
        name="query"
        children={(field) => (
          <field.SearchField
            placeholder="Search Recipes"
            styles="text-md ml-4 outline-none border-none bg-transparent flex-1"
          />
        )}
      />
    </article>
  );
};

import { createFileRoute, redirect } from "@tanstack/react-router";
import { Recipe, User } from "../../data/models";
import { sampleRecipeData } from "../../data/sampleRecipeData";
import { sampleUserData } from "../../data/sampleUserData";

export const Route = createFileRoute("/_authenticated/home")({
  beforeLoad: ({ context }) => {
    const { user, token } = context.auth;
    if (!user && !token) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const recipeList = sampleRecipeData;
  const user = sampleUserData[0];

  return (
    <section className="flex flex-row flex-wrap gap-2 my-6 mx-2">
      {recipeList.map((recipe) => (
        <RecipeCard recipe={recipe} userPantry={user.pantry} />
      ))}
    </section>
  );
}

interface RecipeCardType {
  recipe: Recipe;
  userPantry: User["pantry"];
}

function RecipeCard({ recipe, userPantry }: RecipeCardType) {
  const pantryCheck = (
    recipeIngredients: string[],
    userIngredients: string[] | undefined,
  ) => {
    if (!userIngredients) return false;

    return userIngredients.every((v) => recipeIngredients.includes(v));
  };

  return (
    <article
      className="w-[20rem] h-[15rem] border-[#ec221f] border-2 rounded-md p-2 hover:bg-gray-100"
      key={recipe.id}
    >
      {recipe.imageUrl
        ? <img src={recipe.imageUrl} alt={recipe.name} />
        : <></>}
      <h1 className="text-xl">
        {recipe.name.length > 20
          ? recipe.name.slice(0, 20) + "..."
          : recipe.name}
      </h1>
      <p className="h-[10rem]">
        {recipe.desc.length > 190
          ? recipe.desc.slice(0, 190) + "..."
          : recipe.desc}
      </p>
      <hr />
      {pantryCheck(recipe.ingredients, userPantry)
        ? <p className="italic">✔️ All ingredients in your pantry</p>
        : <p className="italic">❗ Necessary ingredients missing</p>}
    </article>
  );
}

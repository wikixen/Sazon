import { Recipe, User } from "../../data/models";
import "./Home.css";

function RecipeCard(
  { recipe, userPantry }: { recipe: Recipe; userPantry: User["pantry"] },
) {
  const pantryCheck = (
    recipeIngredients: string[],
    userIngredients: string[] | undefined,
  ) => {
    if (!userIngredients) return false;

    return userIngredients.every((v) => recipeIngredients.includes(v));
  };

  return (
    <article className="recipeCard" key={recipe.id}>
      <a href="#" className="recipeCardLink">
        {recipe.imageUrl
          ? <img src={recipe.imageUrl} alt={recipe.name} />
          : <></>}
        <h1 className="recipeTitle">
          {recipe.name.length > 25
            ? recipe.name.slice(0, 25) + "..."
            : recipe.name}
        </h1>
        <p className="recipeDesc">
          {recipe.desc.length > 100
            ? recipe.desc.slice(0, 100) + "..."
            : recipe.desc}
        </p>
        <hr className="checkDivider" />
        {pantryCheck(recipe.ingredients, userPantry)
          ? <p className="ingredientCheck">All ingredients in your pantry</p>
          : <p className="ingredientCheck">Necessary ingredients missing</p>}
      </a>
    </article>
  );
}

export default function Home(
  { recipeList, user }: { recipeList: Recipe[]; user: User },
) {
  return (
    <section className="home">
      {recipeList.map((recipe) => (
        <RecipeCard recipe={recipe} userPantry={user.pantry} />
      ))}
    </section>
  );
}

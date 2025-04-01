import { Recipe } from "../../data/models";

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipeCard">
      <h1>{recipe.name}</h1>
      <p>{recipe.desc}</p>
      <ul>
        {recipe.ingredients.map((ingredient) => <li>{ ingredient }</li> )}
      </ul>
    </article>
  );
}

export default function Home({ recipeList }: { recipeList: Recipe[] }) {
  return (
    <section>
      {recipeList.map((recipe) => <RecipeCard recipe={recipe} />)}
    </section>
  );
}

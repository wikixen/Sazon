import "./Landing.css";
import createRecipesImg from "../../assets/CreateRecipe.png";
import logRecipeImg from "../../assets/LogRecipe.png";
import shareRecipeImg from "../../assets/ShareRecipe.png";

export default function Landing() {
  return (
    <section className="landingContent">
      <article>
        <img src={createRecipesImg} alt="Create Recipes" />
        <p className="tagline">
          Create Recipes<br /> and store them for later
        </p>
      </article>
      <article>
        <img src={shareRecipeImg} alt="Share Recipes" />
        <p className="tagline">
          Share recipes<br /> with friends & family
        </p>
      </article>
      <article>
        <img src={logRecipeImg} alt="Log ingredients" />
        <p className="tagline">
          Keep Track<br /> of ingredients
        </p>
      </article>
    </section>
  );
}

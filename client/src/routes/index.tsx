import { createFileRoute, redirect } from "@tanstack/react-router";
import createRecipesImg from "../assets/CreateRecipe.png";
import logRecipeImg from "../assets/LogRecipe.png";
// import shareRecipeImg from "../assets/ShareRecipe.png";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({
        to: "/home",
      });
    }
  },
});
// Replace with actual auth
function isAuthenticated() {
  return false;
}

function RouteComponent() {
  return (
    <section className="flex flex-row justify-around items-center text-center">
      <LandingArticle
        imgSrc={createRecipesImg}
        imgAlt={"Create Recipes"}
        tagline={"Create Recipes \n and store them for later"}
      />
      <LandingArticle
        imgSrc={logRecipeImg}
        imgAlt={"Log ingredients"}
        tagline={"Keep Track \n of ingredients"}
      />
      {
        /* <LandingArticle
        imgSrc={shareRecipeImg}
        imgAlt={"Share Recipes"}
        tagline={"Share recipes\n with friends & family"}
        /> */
      }
    </section>
  );
}

function LandingArticle(
  { imgSrc, imgAlt, tagline }: {
    imgSrc: string;
    imgAlt: string;
    tagline: string;
  },
) {
  return (
    <article>
      <img src={imgSrc} alt={imgAlt} className="w-2xs" />
      <p className="text-4xl whitespace-pre-line">
        {tagline}
      </p>
    </article>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  const aboutItems = [
    // {
    //   tagline: "🍽 Share the Flavor",
    //   desc: "Swap recipes with friends and family, or explore a community of food lovers."
    // },
    {
      tagline: "🛒 Smart Pantry Tracking",
      desc:
        "Log your ingredients, get usage reminders, and even generate shopping lists.",
    },
    {
      tagline: "👨‍🍳 Personalized Cooking",
      desc:
        "Find recipes based on what you already have, reducing waste and saving money.",
    },
  ];

  return (
    <section className="flex flex-col mx-4 my-8">
      <article className="flex flex-col items-center">
        <h1 className="text-4xl">About Us</h1>
        <p className="text-center mx-32">
          Welcome to Sazón, the recipe-sharing app designed to bring friends and
          family together through the joy of cooking—while keeping your kitchen
          organized!<br />
          <br />

          At Sazón, we believe that great meals start with great planning. Our
          app makes it easy to share your favorite recipes with loved ones,
          discover new dishes, and—most importantly—keep track of the
          ingredients you already have at home. No more guessing what's in your
          pantry or making extra trips to the store!
        </p>
      </article>
      <article className="flex flex-col items-center">
        <h1 className="text-4xl">Why Sazón?</h1>
        <ul className="list-none ps-0">
          {aboutItems.map((item) => (
            <li className="py-2">
              <span className="italic">{item.tagline}</span>
              - {item.desc}
            </li>
          ))}
        </ul>
        <p className="text-center">
          Whether you're a meal-prep pro, a spontaneous home chef, or just
          looking for an easier way to cook with loved ones, Sazón helps you
          create, share, and cook with confidence.
        </p>
      </article>
      <article className="flex flex-col items-center">
        <p className="aboutTagline">Let's spice up every meal—together! 🌶️✨</p>
      </article>
    </section>
  );
}

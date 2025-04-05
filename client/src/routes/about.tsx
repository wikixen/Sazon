import { createFileRoute } from '@tanstack/react-router'
import "../styles/about.css"

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="aboutContent">
      <article>
        <h1>About Us</h1>
        <p className="longBody">
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
      <article>
        <h1>Why Sazón?</h1>
        <ul>
          <li>
            <span className="aboutTagline">🍽 Share the Flavor</span>{" "}
            - Swap recipes with friends and family, or explore a community of
            food lovers.
          </li>
          <li>
            <span className="aboutTagline">🛒 Smart Pantry Tracking</span>{" "}
            - Log your ingredients, get usage reminders, and even generate
            shopping lists.
          </li>
          <li>
            <span className="aboutTagline">👨‍🍳 Personalized Cooking</span>{" "}
            - Find recipes based on what you already have, reducing waste and
            saving money.
          </li>
        </ul>
        <p className="longBody">
          Whether you're a meal-prep pro, a spontaneous home chef, or just
          looking for an easier way to cook with loved ones, Sazón helps you
          create, share, and cook with confidence.
        </p>
      </article>
      <article>
        <p className="aboutTagline">Let's spice up every meal—together! 🌶️✨</p>
      </article>
    </section>
  );
}

import { useState } from "react";
import "./App.css";
import Landing from "./pages/landing/Landing";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import { sampleRecipeData } from "./data/sampleRecipeData";
import { User } from "./data/models";
import { sampleUserData } from "./data/sampleUserData";
import Pantry from "./pages/home/pantry/Pantry";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

function App() {
  const [auth, setAuth] = useState(true);

  const user: User = sampleUserData[0];

  return (
    <main>
      <Header authStatus={auth} setAuthStatus={setAuth} />
      <RouterProvider router={router} />
      {/* {auth ? <Home recipeList={sampleRecipeData} user={user} /> : <Landing />} */}
      {/* <Pantry userPantry={user.pantry} /> */}
      <Footer />
    </main>
  );
}

export default App;

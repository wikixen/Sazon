import { useState } from "react";
import "./App.css";
import Landing from "./pages/landing/Landing";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import { sampleRecipeData } from "./data/sampleRecipeData";
import { Recipe } from "./data/models";

function App() {
  const [auth, setAuth] = useState(true);

  return (
    <main className="home">
      <Header authStatus={auth} setAuthStatus={setAuth} />
      {auth ? <Home recipeList={sampleRecipeData} /> : <Landing />}
      <Footer />
    </main>
  );
}

export default App;

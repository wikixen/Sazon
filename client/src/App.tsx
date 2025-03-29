import { useState } from "react";
import "./App.css";
import Landing from "./pages/landing/Landing";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import About from "./pages/footerLinks/about/About";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <main className="home">
      <Header authStatus={auth} setAuthStatus={setAuth} />
      {auth ? <Home /> : <Landing />}
      {/* <About /> */}
      <Footer />
    </main>
  );
}

export default App;

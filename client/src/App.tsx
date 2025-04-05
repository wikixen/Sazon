import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <main>
      <Header authStatus={auth} setAuthStatus={setAuth} />
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </main>
  );
}

export default App;

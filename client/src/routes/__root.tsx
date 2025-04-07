import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [auth, setAuth] = useState(true);
  return (
    <>
      <Header authStatus={auth} />
      <Outlet />
      <Footer />
    </>
  );
}

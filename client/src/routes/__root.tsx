import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

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

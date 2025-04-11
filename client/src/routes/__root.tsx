import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { Auth, AuthContextType } from "../hooks/authProvider";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

type RouterContext = {
  auth: AuthContextType;
};

function RootComponent() {
  return (
    <>
      <Auth>
        <Header />
        <Outlet />
        <Footer />
      </Auth>
    </>
  );
}

import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useAuth } from "./hooks/authProvider";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  context: { auth: undefined! },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const auth = useAuth();
  return (
    <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <RouterProvider router={router} context={auth} />
    </main>
  );
}

export default App;

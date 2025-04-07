import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;

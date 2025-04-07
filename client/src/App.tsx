import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import HeaderDialog from "./components/Dialog";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <HeaderDialog button={<button>Test</button>}/>
      {/* <RouterProvider router={router} /> */}
    </main>
  );
}

export default App;

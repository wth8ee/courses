import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return (
    <div className="w-screen min-h-screen bg-slate-50 overflow-x-hidden overflow-y-auto">
      <RouterProvider router={router} />
    </div>
  );
}

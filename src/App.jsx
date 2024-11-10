import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from "./pages/HomePage"

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    }
  ])

  return (
    <div className="w-screen min-h-screen bg-slate-50">
      <RouterProvider router={router} />
    </div>
  ) 
}
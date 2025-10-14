import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import NotFound from "./components/NotFound/NotFound.jsx";
import Layout from "./components/main/Layout/Layout";
import Conan from "./sections/Conan/Conan";

function App() {
  const router = createBrowserRouter([
    {
      path: "",

      /* اى غلط م عندى كمبرمج ف الكود*/
      // errorElement: <NotFound />,

      element: <Layout />,
      children: [
        {
          // path: "",
          index: true,
          element: <Conan />,
        },

        {
          path: "*", // اى مسار غير اللى فوق
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

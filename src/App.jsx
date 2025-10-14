import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound.jsx";
import Layout from "./components/main/Layout/Layout";
import Conan from "./sections/Conan/Conan";
import Nav from "./components/main/Nav/Nav.jsx";
import Hero from "./sections/Conan/Hero.jsx";
import About from "./sections/About/About.jsx";
import Skills from "./sections/Skills/Skills.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import FooterApp from "./components/main/Footer/Footer.jsx";

function App() {
  // const router = createBrowserRouter([
  //   {


  //     /* اى غلط م عندى كمبرمج ف الكود*/
  //     errorElement: <NotFound />,

  //     element: <Layout />,
  //     children: [
  //       {
  //         // path: "",
  //         index: true,
  //         element: <Conan />,
  //       },

  //       {
  //         path: "*", // اى مسار غير اللى فوق
  //         element: <NotFound />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Nav />
      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <FooterApp />
    </>
  );
}

export default App;

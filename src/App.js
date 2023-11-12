import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";

// React Element
const Body1 = <div>This is Body of React Element</div>;

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      {Body1}
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

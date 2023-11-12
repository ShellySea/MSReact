import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Cart from "./components/Cart.js";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

import React, { lazy, Suspense, useEffect, useState } from "react";
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
import UserContext from "./contexts/UserContext.js";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const AppLayout = () => {
  const [theme, setTheme] = useState("light");

  const [userName, setUserName] = useState("");

  const darkTheme = () => {
    setTheme("dark");
  };

  const lightTheme = () => {
    setTheme("light");
  };

  useEffect(() => {
    const data = { name: "Shelly Sea" };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
          <div>
            <Header theme={theme} settingTheme={(theme) => setTheme(theme)} />
            <Outlet />
            <Footer />
          </div>
        </ThemeProvider>
      </UserContext.Provider>
    </Provider>
  );
};

/*
 * Lazy loading
 * Code Splitting
 * Dynamic Bundling
 * On demand loading
 * dynamic import
 * Chunking
 * */
const Grocery = lazy(() => import("./components/Grocery.js"));

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
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

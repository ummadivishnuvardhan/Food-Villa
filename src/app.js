import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";

// Lazy load InstaMart component
const InstaMart = lazy(() => import("./components/InstaMart"));
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/SignUp"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider> {/* Wrap the whole app with CartProvider */}
        <AppLayout />
      </CartProvider>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/cart",
        element: <Cart />, // Cart page for displaying the cart items
      },
      // {
      //   path: "/instamart",
      //   element: (
      //     <Suspense fallback={<Shimmer />}>
      //       <InstaMart />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Signup />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

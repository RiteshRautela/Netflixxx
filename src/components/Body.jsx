import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import TvShow from "./TvShow";
import FullVideo from "./FullVideo";
import About from "../Pages/About";
import NotFoundPage from "./NotFoundPage";
import WatchPage from "./WatchPage";
import Information from "./Information";

const appRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/browse", element: <Browse /> },
  { path: "/tv-shows", element: <TvShow /> },
  { path: "/FullVideo/:movieId", element: <FullVideo /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFoundPage /> },
  { path: "/watch/:movieId", element: <WatchPage /> }, // ✅ Movie Watch Page
  { path: "/watch/tv/:tvId", element: <WatchPage /> }, // ✅ TV Watch Page
  { path: "/information/:id", element: <Information /> } // ✅ Corrected syntax
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;

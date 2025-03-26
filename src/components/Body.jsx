import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import TvShow from "./TvShow";
import FullVideo from "./FullVideo";
import About from "../Pages/About"; // ✅ Ensure correct import
import NotFoundPage from "./NotFoundPage";
import WatchPage from "./WatchPage";

const appRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/browse", element: <Browse /> },
  { path: "/tv-shows", element: <TvShow /> },
  { path: "/FullVideo/:movieId", element: <FullVideo /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFoundPage/> }, // ✅ Handles 404 errors
  {path:"/watch/:movieId" , element: <WatchPage/>},
  
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;

import Blog from "./components/Blog";
import AboutPage from "./Pages/AboutUsPage";
import BlogPage from "./Pages/BlogPage";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import PostPage from "./Pages/PostPage";
import Profile from "./Pages/Profile";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <AboutPage /> },
  { path: "/profile//*", element: <Profile /> },
  { path: "/blogs", element: <BlogPage /> },
  { path: "/blogs/:id", element: <Blog /> },
  { path: "/*", element: <NotFound /> },
  { path: "/post", element: <PostPage /> },
  { path: "/post/:id([0-9]+)", element: <PostPage /> },
];

export default routes;

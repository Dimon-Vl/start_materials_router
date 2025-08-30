import Welcome from "./Pages/Welcome/Welcome";
import StateHook from "./Pages/StateHookPage/StateHook";
import Community from "./Pages/Community/Community";
import Resources from "./Pages/Resources/Resources";
import About from "./Pages/About/About";
import Users from "./Pages/Users/Users";
import User from "./components/User/User";
import Faq from "./Pages/Faq/Faq";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

export function usersLoader() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json());
}

export function userLoader({ params }) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(res => res.json());
}

const routes = [
  { path: "/", element: <Welcome />, index: true },
  { path: "/hooks", element: <StateHook /> },
  { path: "/community", element: <Community /> },
  { path: "/resources", element: <Resources /> },
  { path: "/about", element: <About /> },
  { path: "users", element: <Users />, loader: usersLoader },
  { path: "users/:id", element: <User />, loader: userLoader },
  { path: "faq", element: <Faq /> }, 
  { path: "*", element: <ErrorPage /> },
];

export default routes;


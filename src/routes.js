// external import statements
import { useRoutes } from "react-router-dom";

// internal import statement
import { NoMatch } from "./Pages";
import { AuthLayout } from "./layout";

// custom Router
const Router = () => {
    let routes = [
        { path: "*", element: <NoMatch /> },
        { path: "/", element: <AuthLayout /> },
    ];
    let element = useRoutes(routes);
    return element;
};

export default Router;

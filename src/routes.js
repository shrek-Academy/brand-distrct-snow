// external import statements
import { useRoutes } from "react-router-dom";

// internal import statement
import { NoMatch } from "./Pages";

// custom Router
const Router = () => {
    let routes = [{ path: "*", element: <NoMatch /> }];
    let element = useRoutes(routes);
    return element;
};

export default Router;

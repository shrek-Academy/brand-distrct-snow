// external import statements
import { useRoutes } from "react-router-dom";

// internal import statement
import { NoMatch, CorporateHome } from "./Pages";
import { AuthLayout, VerificationLayout, DashboardLayout } from "./layout";

// custom Router
const Router = () => {
    let routes = [
        { path: "*", element: <NoMatch /> },
        {
            path: "/",
            element: <AuthLayout />,
            children: [{ index: true, element: <CorporateHome /> }],
        },
        { path: "/v", element: <VerificationLayout /> },
        { path: "/app", element: <DashboardLayout /> },
    ];
    let element = useRoutes(routes);
    return element;
};

export default Router;

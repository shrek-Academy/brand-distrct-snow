// external import statements
import { useRoutes } from "react-router-dom";

// internal import statement
import {
    NoMatch,
    CorporateHome,
    IndividualHome,
    BrandHome,
    VerifyPhone,
    VericationComplete,
    GeneralHome,
    SignIn,
    ForgetPasscode,
    ResetEmail,
} from "./Pages";
import { AuthLayout, VerificationLayout, DashboardLayout } from "./layout";

// custom Router
const Router = () => {
    let routes = [
        { path: "*", element: <NoMatch /> },
        {
            path: "/",
            element: <AuthLayout />,
            children: [
                { index: true, element: <CorporateHome /> },
                { path: "individual", element: <IndividualHome /> },
                { path: "brand", element: <BrandHome /> },
            ],
        },
        {
            path: "/",
            element: <VerificationLayout />,
            children: [
                { path: "phone", element: <VerifyPhone /> },
                { path: "complete", element: <VericationComplete /> },
                { path: "account", element: <GeneralHome /> },
                { path: "signin", element: <SignIn /> },
                { path: "forget-passcode", element: <ForgetPasscode /> },
                { path: "reset-email", element: <ResetEmail /> },
            ],
        },
        { path: "/app", element: <DashboardLayout /> },
    ];
    let element = useRoutes(routes);
    return element;
};

export default Router;

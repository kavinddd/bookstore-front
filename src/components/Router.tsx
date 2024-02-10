import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "../App.tsx";
import ErrorPage from "./ErrorPage.tsx";
import HomeContent from "./HomeContent.tsx";
import LoginPage from "./LoginPage.tsx";

const Router = () => {
     const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            errorElement: <ErrorPage message="Error ja"/>,
            children: [
                {index: true, element: <HomeContent/>},
                {path: "login", element: <LoginPage />}
                // {path: "shop", element: <ShoppingContent/>}
            ]
        }
    ]);

    return <RouterProvider router={router}/>;
}

export default Router
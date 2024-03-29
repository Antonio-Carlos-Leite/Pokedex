import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { SearchPage } from "../pages/SearchPage";
import { Page404 } from "../pages/Page404";

const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    errorElement:<Page404/>,
    children:[
        {path:"/", element:<Home/>},
        {path:"/details", element:<Details/>},
        {path:"/search", element:<SearchPage/>},
    ]
},
]);

export function AppRoutes() {
    return <RouterProvider router={router}/>;
}

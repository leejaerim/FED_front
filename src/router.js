import {createBrowserRouter} from "react-router-dom";
import Home from "./routers/Home";
import App from "./App";
import NotFound from "./routers/NotFound";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement : <NotFound></NotFound>,
        children: [
            {
                path: "",
                element: <Home></Home>,
            },
        ],
    },
]);
export default router;
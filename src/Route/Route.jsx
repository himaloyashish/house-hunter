import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import SignUp from "../shared/SignUp/SignUp";
import SignIn from "../shared/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:"signUp",
                element:<SignUp></SignUp>
            },
            {
                path:"signIn",
                element:<SignIn></SignIn>
            }
        ]
    }
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import * as React from "react"
import Participants from "../pages/Participants";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
    },
    {
        path:'/participants',
        element:<Participants />
    },
    {
        path:"/profile",
        element:<Profile/>
    }
])

export default router
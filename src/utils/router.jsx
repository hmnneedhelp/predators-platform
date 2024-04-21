import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import * as React from "react"

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
    },
])

export default router
import { createBrowserRouter } from "react-router-dom"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Rooms from "@/pages/Rooms"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/rooms/:id",
        element: <Rooms />
    },
    {
        path: "*",
        element: <NotFound />
    }
])
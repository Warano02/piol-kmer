import { createBrowserRouter } from "react-router-dom"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Rooms from "@/pages/Rooms"
import AppLayout from "@/Layout/AppLayout"

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
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
        ]
    }
])
import { createBrowserRouter } from "react-router-dom"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Rooms from "@/pages/Rooms"
import AppLayout from "@/Layout/AppLayout"
import  Search  from "@/pages/Search"

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
                path:"/s/:type?",
                element:<Search/>
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])
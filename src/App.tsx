import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./Providers/ThemeProvider"
import {router} from './routes/routes.tsx'

function App() {

  return (
    <ThemeProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </ThemeProvider>
  )
}

export default App

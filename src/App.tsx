import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./Providers/ThemeProvider"
import { router } from './routes/routes.tsx'
import { AppProvider } from "./Providers/AppProvider.tsx"

function App() {

  return (
    <AppProvider>
      <ThemeProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </ThemeProvider>
    </AppProvider>
  )
}

export default App

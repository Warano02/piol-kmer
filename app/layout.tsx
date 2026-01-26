import type { Metadata } from "next"
import "@/styles/globals.css"
import LayoutWrapper from "./LayoutWrapper"

export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to piolKmer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}

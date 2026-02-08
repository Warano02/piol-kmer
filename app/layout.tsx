import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to piolKmer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import type { FC, PropsWithChildren } from "react"
import { Poppins } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ConvexClientProvider from "@/components/convex-client-provider"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin", "latin-ext"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
export const metadata: Metadata = {
  title: "Vegio.co",
  description: "Find self-picking places in your neiborhood",
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConvexClientProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ConvexClientProvider>
  )
}

export default RootLayout
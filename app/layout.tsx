import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { TopBar } from "@/components/sections/top-bar"
import "./globals.css"

const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diana Event Rentals - Premium Event Decor & Rentals in DFW",
  description:
    "Complete event decoration services in Dallas-Fort Worth. Balloon decor, photo booths, cotton candy stations, champagne carts, flower walls & 360 photography for weddings, parties & corporate events.",
  generator: "v0.app",
  keywords: ["event rentals DFW", "balloon decor DFW", "photo booths DFW", "champagne cart rental Dallas", "flower walls Fort Worth", "event decoration Texas", "cotton candy machine", "360 photography", "DFW events"],
  openGraph: {
    title: "Diana Event Rentals - Premium Event Decor & Rentals in DFW",
    description: "Complete event decoration services in Dallas-Fort Worth. Balloon decor, photo booths, cotton candy stations, champagne carts, flower walls & 360 photography for weddings, parties & corporate events.",
    type: "website",
    locale: "en_US",
    url: "https://www.dianaeventrentals.com",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <TopBar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

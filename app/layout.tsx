import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Narendra Dzulqarnain - Portfolio",
  description: "Computer Science Student Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--roboto",
})

export const metadata: Metadata = {
  title: "Image Customizer",
  description: "AI-Powered Image customizer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#624cf5",
        },
      }}
    >
      <html lang="en">
        <body className={cn("roboto antialiased", roboto.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

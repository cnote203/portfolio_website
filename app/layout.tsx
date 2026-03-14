import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { PortfolioSidebar } from "@/components/portfolio-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Christopher Accad | Biomedical Mechanical Engineering Student",
  description: "Portfolio of Christopher Accad, Biomedical Mechanical Engineering student at the University of Ottawa",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16-o6pLv5z1H3RdymoHN7SHwp3yXqeuV2.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-rLZLYJ39EqaVQTjfFihJVU1YjAJeKk.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-JrbZnnVwZWNCpHRQbKRn2aCWxcmOIo.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        rel: "android-chrome-192x192",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-V5R41E7DbUs2DsHkbc8nhdABwh4N38.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512-Bh8FPAmNfNhtqwLAFcCmMlIW80ezrM.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <PortfolioSidebar />
              <main className="flex-1 overflow-auto">{children}</main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
